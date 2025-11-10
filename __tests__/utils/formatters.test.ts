import { describe, it, expect } from 'vitest';
import { formatWhatsApp, formatCEP, formatPhone, removeFormatting } from '@/utils/formatters';

describe('formatWhatsApp', () => {
  it('deve formatar número vazio', () => {
    expect(formatWhatsApp('')).toBe('');
  });

  it('deve formatar apenas DDD', () => {
    expect(formatWhatsApp('32')).toBe('(32');
  });

  it('deve formatar DDD + início do número', () => {
    expect(formatWhatsApp('32999')).toBe('(32) 999');
  });

  it('deve formatar número completo', () => {
    expect(formatWhatsApp('32991990239')).toBe('(32) 99199-0239');
  });

  it('deve formatar número já formatado', () => {
    expect(formatWhatsApp('(32) 99199-0239')).toBe('(32) 99199-0239');
  });

  it('deve limitar a 11 dígitos', () => {
    expect(formatWhatsApp('329919902391234')).toBe('(32) 99199-0239');
  });

  it('deve ignorar caracteres não numéricos', () => {
    expect(formatWhatsApp('32abc991def990239')).toBe('(32) 99199-0239');
  });

  it('deve formatar número fixo (10 dígitos)', () => {
    expect(formatWhatsApp('3235711599')).toBe('(32) 3571-1599');
  });

  it('deve lidar com entrada parcial', () => {
    expect(formatWhatsApp('3299')).toBe('(32) 99');
    expect(formatWhatsApp('329919')).toBe('(32) 9919');
    expect(formatWhatsApp('3299199')).toBe('(32) 99199');
  });
});

describe('formatCEP', () => {
  it('deve formatar CEP vazio', () => {
    expect(formatCEP('')).toBe('');
  });

  it('deve formatar CEP parcial', () => {
    expect(formatCEP('36180')).toBe('36180');
  });

  it('deve formatar CEP completo', () => {
    expect(formatCEP('36180000')).toBe('36180-000');
  });

  it('deve formatar CEP já formatado', () => {
    expect(formatCEP('36180-000')).toBe('36180-000');
  });

  it('deve limitar a 8 dígitos', () => {
    expect(formatCEP('361800001234')).toBe('36180-000');
  });

  it('deve ignorar caracteres não numéricos', () => {
    expect(formatCEP('361abc80000')).toBe('36180-000');
  });
});

describe('formatPhone', () => {
  it('deve formatar telefone vazio', () => {
    expect(formatPhone('')).toBe('');
  });

  it('deve formatar apenas DDD', () => {
    expect(formatPhone('32')).toBe('(32');
  });

  it('deve formatar telefone completo', () => {
    expect(formatPhone('3235711599')).toBe('(32) 3571-1599');
  });

  it('deve formatar telefone já formatado', () => {
    expect(formatPhone('(32) 3571-1599')).toBe('(32) 3571-1599');
  });

  it('deve limitar a 10 dígitos', () => {
    expect(formatPhone('32357115991234')).toBe('(32) 3571-1599');
  });
});

describe('removeFormatting', () => {
  it('deve remover formatação de WhatsApp', () => {
    expect(removeFormatting('(32) 99199-0239')).toBe('32991990239');
  });

  it('deve remover formatação de CEP', () => {
    expect(removeFormatting('36180-000')).toBe('36180000');
  });

  it('deve retornar string vazia', () => {
    expect(removeFormatting('')).toBe('');
  });

  it('deve retornar apenas números', () => {
    expect(removeFormatting('abc123def456')).toBe('123456');
  });

  it('deve lidar com string sem números', () => {
    expect(removeFormatting('abcdef')).toBe('');
  });
});
