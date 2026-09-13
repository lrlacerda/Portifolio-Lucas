// Rate limiter em memória, best-effort: protege contra rajadas simples de
// abuso num único processo serverless "quente". NÃO é um limite distribuído
// e global (cada instância da função tem seu próprio contador) — para algo
// robusto de verdade, seria necessário um armazenamento externo compartilhado
// como Upstash Redis ou Vercel KV. Ainda assim, já eleva bastante a régua
// contra bots simples e scripts básicos.

const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 5;

const hits = new Map(); // ip -> timestamps[]

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

export function checkRateLimit(req) {
  const ip = getClientIp(req);
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(ip, timestamps);
    const retryAfterMs = WINDOW_MS - (now - timestamps[0]);
    return { allowed: false, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
  }

  timestamps.push(now);
  hits.set(ip, timestamps);

  // limpeza best-effort para não crescer sem limite
  if (hits.size > 5000) {
    for (const [key, value] of hits) {
      if (value.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return { allowed: true };
}
