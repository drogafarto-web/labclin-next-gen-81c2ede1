import { useRef, useCallback } from "react";

interface RateLimiterConfig {
  maxAttempts: number;
  windowMs: number;
}

interface RateLimiterReturn {
  checkLimit: () => boolean;
  getRemainingAttempts: () => number;
  reset: () => void;
}

/**
 * Hook para implementar rate limiting client-side
 * Previne spam e abuso de formulários
 * 
 * @param maxAttempts - Número máximo de tentativas permitidas
 * @param windowMs - Janela de tempo em milissegundos
 * 
 * @example
 * const { checkLimit, getRemainingAttempts } = useRateLimiter(3, 60000); // 3 tentativas por minuto
 * 
 * if (!checkLimit()) {
 *   toast.error(`Limite excedido. Restam ${getRemainingAttempts()} tentativas.`);
 *   return;
 * }
 */
export const useRateLimiter = (
  maxAttempts: number = 3,
  windowMs: number = 60000 // 1 minuto por padrão
): RateLimiterReturn => {
  const attemptsRef = useRef<number[]>([]);

  /**
   * Verifica se o limite foi excedido
   * @returns true se ainda pode tentar, false se excedeu o limite
   */
  const checkLimit = useCallback((): boolean => {
    const now = Date.now();

    // Remove tentativas antigas fora da janela de tempo
    attemptsRef.current = attemptsRef.current.filter(
      (timestamp) => now - timestamp < windowMs
    );

    // Verifica se excedeu o limite
    if (attemptsRef.current.length >= maxAttempts) {
      return false;
    }

    // Registra nova tentativa
    attemptsRef.current.push(now);
    return true;
  }, [maxAttempts, windowMs]);

  /**
   * Retorna quantas tentativas ainda restam
   */
  const getRemainingAttempts = useCallback((): number => {
    const now = Date.now();
    const recentAttempts = attemptsRef.current.filter(
      (timestamp) => now - timestamp < windowMs
    );
    return Math.max(0, maxAttempts - recentAttempts.length);
  }, [maxAttempts, windowMs]);

  /**
   * Reseta o contador de tentativas
   */
  const reset = useCallback((): void => {
    attemptsRef.current = [];
  }, []);

  return {
    checkLimit,
    getRemainingAttempts,
    reset,
  };
};

/**
 * Hook especializado para formulários com mensagens de erro em português
 */
export const useFormRateLimiter = (
  maxAttempts: number = 3,
  windowMs: number = 60000
) => {
  const { checkLimit, getRemainingAttempts, reset } = useRateLimiter(maxAttempts, windowMs);

  const checkAndNotify = useCallback(
    (onError: (message: string) => void): boolean => {
      if (!checkLimit()) {
        const remaining = getRemainingAttempts();
        const timeMinutes = Math.ceil(windowMs / 60000);
        
        if (remaining === 0) {
          onError(
            `Você atingiu o limite de ${maxAttempts} tentativas. ` +
            `Aguarde ${timeMinutes} minuto${timeMinutes > 1 ? "s" : ""} para tentar novamente.`
          );
        } else {
          onError(
            `Você tem ${remaining} tentativa${remaining > 1 ? "s" : ""} restante${remaining > 1 ? "s" : ""}.`
          );
        }
        return false;
      }
      return true;
    },
    [checkLimit, getRemainingAttempts, maxAttempts, windowMs]
  );

  return {
    checkLimit: checkAndNotify,
    getRemainingAttempts,
    reset,
  };
};
