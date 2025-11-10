import { describe, it, expect } from 'vitest';
import { sanitizeInput } from '@/utils/sanitizers';

describe('sanitizeInput', () => {
  it('deve retornar string limpa sem alterações', () => {
    expect(sanitizeInput('João da Silva')).toBe('João da Silva');
  });

  it('deve remover scripts XSS básicos', () => {
    const malicious = '<script>alert("XSS")</script>João';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('<script>');
    expect(result).not.toContain('alert');
  });

  it('deve remover tags HTML perigosas', () => {
    const malicious = '<img src=x onerror="alert(1)">João';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('onerror');
    expect(result).not.toContain('alert');
  });

  it('deve remover javascript: URLs', () => {
    const malicious = '<a href="javascript:alert(1)">Click</a>';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('javascript:');
  });

  it('deve permitir texto puro', () => {
    expect(sanitizeInput('Texto simples sem HTML')).toBe('Texto simples sem HTML');
  });

  it('deve lidar com strings vazias', () => {
    expect(sanitizeInput('')).toBe('');
  });

  it('deve limpar múltiplos vetores de ataque', () => {
    const malicious = '<script>alert(1)</script><img src=x onerror=alert(2)>Texto';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('<script>');
    expect(result).not.toContain('onerror');
    expect(result).not.toContain('alert');
  });

  it('deve preservar acentuação e caracteres especiais válidos', () => {
    expect(sanitizeInput('José Mendonça & Cia.')).toContain('José');
    expect(sanitizeInput('José Mendonça & Cia.')).toContain('Mendonça');
  });

  it('deve remover event handlers', () => {
    const malicious = '<div onclick="alert(1)">Texto</div>';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('onclick');
    expect(result).not.toContain('alert');
  });

  it('deve remover iframes', () => {
    const malicious = '<iframe src="http://evil.com"></iframe>Texto';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('<iframe');
    expect(result).not.toContain('evil.com');
  });

  it('deve lidar com encoding de caracteres', () => {
    const encoded = '&lt;script&gt;alert(1)&lt;/script&gt;';
    const result = sanitizeInput(encoded);
    expect(result).not.toContain('script');
  });

  it('deve remover data: URLs', () => {
    const malicious = '<img src="data:text/html,<script>alert(1)</script>">';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('data:');
  });
});
