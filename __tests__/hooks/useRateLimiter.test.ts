import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useRateLimiter, useFormRateLimiter } from '@/hooks/useRateLimiter';

describe('useRateLimiter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('deve permitir tentativas dentro do limite', () => {
    const { result } = renderHook(() => useRateLimiter(3, 60000));

    act(() => {
      expect(result.current.checkLimit()).toBe(true);
      expect(result.current.checkLimit()).toBe(true);
      expect(result.current.checkLimit()).toBe(true);
    });
  });

  it('deve bloquear tentativas após exceder o limite', () => {
    const { result } = renderHook(() => useRateLimiter(3, 60000));

    act(() => {
      result.current.checkLimit();
      result.current.checkLimit();
      result.current.checkLimit();
    });

    act(() => {
      expect(result.current.checkLimit()).toBe(false);
    });
  });

  it('deve retornar tentativas restantes corretamente', () => {
    const { result } = renderHook(() => useRateLimiter(3, 60000));

    expect(result.current.getRemainingAttempts()).toBe(3);

    act(() => {
      result.current.checkLimit();
    });

    expect(result.current.getRemainingAttempts()).toBe(2);

    act(() => {
      result.current.checkLimit();
    });

    expect(result.current.getRemainingAttempts()).toBe(1);
  });

  it('deve resetar tentativas após janela de tempo', () => {
    const { result } = renderHook(() => useRateLimiter(3, 60000));

    act(() => {
      result.current.checkLimit();
      result.current.checkLimit();
      result.current.checkLimit();
    });

    expect(result.current.checkLimit()).toBe(false);

    // Avança 61 segundos
    act(() => {
      vi.advanceTimersByTime(61000);
    });

    act(() => {
      expect(result.current.checkLimit()).toBe(true);
    });
  });

  it('deve resetar manualmente', () => {
    const { result } = renderHook(() => useRateLimiter(3, 60000));

    act(() => {
      result.current.checkLimit();
      result.current.checkLimit();
      result.current.checkLimit();
    });

    expect(result.current.getRemainingAttempts()).toBe(0);

    act(() => {
      result.current.reset();
    });

    expect(result.current.getRemainingAttempts()).toBe(3);
  });

  it('deve funcionar com configurações personalizadas', () => {
    const { result } = renderHook(() => useRateLimiter(5, 30000));

    expect(result.current.getRemainingAttempts()).toBe(5);

    act(() => {
      result.current.checkLimit();
      result.current.checkLimit();
    });

    expect(result.current.getRemainingAttempts()).toBe(3);
  });
});

describe('useFormRateLimiter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('deve chamar callback com mensagem de erro quando exceder limite', () => {
    const { result } = renderHook(() => useFormRateLimiter(3, 60000));
    const onError = vi.fn();

    act(() => {
      result.current.checkLimit(onError);
      result.current.checkLimit(onError);
      result.current.checkLimit(onError);
    });

    act(() => {
      result.current.checkLimit(onError);
    });

    expect(onError).toHaveBeenCalled();
    expect(onError).toHaveBeenCalledWith(expect.stringContaining('limite'));
  });

  it('deve retornar true quando dentro do limite', () => {
    const { result } = renderHook(() => useFormRateLimiter(3, 60000));
    const onError = vi.fn();

    let canProceed: boolean = false;
    
    act(() => {
      canProceed = result.current.checkLimit(onError);
    });

    expect(canProceed).toBe(true);
    expect(onError).not.toHaveBeenCalled();
  });

  it('deve retornar false quando exceder limite', () => {
    const { result } = renderHook(() => useFormRateLimiter(2, 60000));
    const onError = vi.fn();

    act(() => {
      result.current.checkLimit(onError);
      result.current.checkLimit(onError);
    });

    let canProceed: boolean = true;
    
    act(() => {
      canProceed = result.current.checkLimit(onError);
    });

    expect(canProceed).toBe(false);
    expect(onError).toHaveBeenCalled();
  });

  it('deve incluir tempo de espera na mensagem de erro', () => {
    const { result } = renderHook(() => useFormRateLimiter(1, 120000)); // 2 minutos
    const onError = vi.fn();

    act(() => {
      result.current.checkLimit(onError);
    });

    act(() => {
      result.current.checkLimit(onError);
    });

    expect(onError).toHaveBeenCalledWith(expect.stringContaining('2 minutos'));
  });

  it('deve usar singular quando 1 minuto', () => {
    const { result } = renderHook(() => useFormRateLimiter(1, 60000)); // 1 minuto
    const onError = vi.fn();

    act(() => {
      result.current.checkLimit(onError);
    });

    act(() => {
      result.current.checkLimit(onError);
    });

    expect(onError).toHaveBeenCalledWith(expect.stringContaining('1 minuto'));
    expect(onError).not.toHaveBeenCalledWith(expect.stringContaining('minutos'));
  });
});
