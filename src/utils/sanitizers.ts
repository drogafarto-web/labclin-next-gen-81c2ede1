import DOMPurify from "dompurify";

/**
 * Sanitiza input de texto para prevenir XSS e injection attacks
 * Remove tags HTML e scripts maliciosos
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return "";
  
  // Configuração segura do DOMPurify
  const clean = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Remove todas as tags HTML
    ALLOWED_ATTR: [], // Remove todos os atributos
    KEEP_CONTENT: true, // Mantém o conteúdo de texto
  });

  return clean.trim();
};

/**
 * Sanitiza múltiplos inputs de uma vez
 */
export const sanitizeInputs = <T extends Record<string, any>>(inputs: T): T => {
  const sanitized = { ...inputs };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === "string") {
      sanitized[key] = sanitizeInput(sanitized[key]) as any;
    }
  }
  
  return sanitized;
};

/**
 * Valida se uma string contém apenas caracteres seguros
 */
export const isSafeString = (input: string): boolean => {
  // Detecta padrões suspeitos
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick, onerror, etc
    /<iframe/i,
    /eval\(/i,
    /expression\(/i,
  ];

  return !dangerousPatterns.some((pattern) => pattern.test(input));
};

/**
 * Remove caracteres especiais perigosos mantendo acentuação
 */
export const sanitizeForWhatsApp = (input: string): string => {
  // Remove caracteres que podem quebrar URLs ou mensagens WhatsApp
  const dangerous = /[<>{}[\]\\]/g;
  return input.replace(dangerous, "");
};
