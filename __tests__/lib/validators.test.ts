import { describe, it, expect } from 'vitest';
import { checkupFormSchema, coletaDomiciliarSchema, contactFormSchema } from '@/lib/validators';

describe('checkupFormSchema', () => {
  describe('campo name', () => {
    it('deve aceitar nome válido', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João da Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(true);
    });

    it('deve rejeitar nome muito curto', () => {
      const result = checkupFormSchema.safeParse({
        name: 'Jo',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('3 caracteres');
      }
    });

    it('deve rejeitar nome muito longo', () => {
      const result = checkupFormSchema.safeParse({
        name: 'a'.repeat(101),
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('100 caracteres');
      }
    });

    it('deve rejeitar nome com números', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João123',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('apenas letras');
      }
    });

    it('deve aceitar nome com acentos', () => {
      const result = checkupFormSchema.safeParse({
        name: 'José Ângelo Mendonça',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(true);
    });

    it('deve remover espaços em branco extras', () => {
      const result = checkupFormSchema.safeParse({
        name: '  João Silva  ',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('João Silva');
      }
    });
  });

  describe('campo whatsapp', () => {
    it('deve aceitar WhatsApp válido', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(true);
    });

    it('deve rejeitar WhatsApp sem formatação', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '32991990239',
        age: '26-35',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('formato');
      }
    });

    it('deve rejeitar WhatsApp com formato incorreto', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 9999-9999',
        age: '26-35',
      });
      expect(result.success).toBe(false);
    });
  });

  describe('campo age', () => {
    it('deve aceitar faixas etárias válidas', () => {
      const faixas = ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'];
      
      faixas.forEach(age => {
        const result = checkupFormSchema.safeParse({
          name: 'João Silva',
          whatsapp: '(32) 99199-0239',
          age,
        });
        expect(result.success).toBe(true);
      });
    });

    it('deve rejeitar faixa etária inválida', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 99199-0239',
        age: '70-80',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('faixa etária');
      }
    });
  });

  describe('campo sexo (opcional)', () => {
    it('deve aceitar sem sexo', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
      });
      expect(result.success).toBe(true);
    });

    it('deve aceitar Masculino e Feminino', () => {
      const result1 = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
        sexo: 'Masculino',
      });
      expect(result1.success).toBe(true);

      const result2 = checkupFormSchema.safeParse({
        name: 'Maria Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
        sexo: 'Feminino',
      });
      expect(result2.success).toBe(true);
    });
  });

  describe('campo condicoes (opcional)', () => {
    it('deve aceitar array vazio', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
        condicoes: [],
      });
      expect(result.success).toBe(true);
    });

    it('deve aceitar array com condições', () => {
      const result = checkupFormSchema.safeParse({
        name: 'João Silva',
        whatsapp: '(32) 99199-0239',
        age: '26-35',
        condicoes: ['Diabetes', 'Hipertensão'],
      });
      expect(result.success).toBe(true);
    });
  });
});

describe('coletaDomiciliarSchema', () => {
  const validData = {
    nome: 'João Silva',
    whatsapp: '(32) 99199-0239',
    endereco: 'Rua das Flores, 123',
    data: '2025-12-31',
    horario: '10:00',
  };

  it('deve aceitar dados válidos', () => {
    const result = coletaDomiciliarSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  describe('campo endereco', () => {
    it('deve rejeitar endereço muito curto', () => {
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        endereco: 'Rua A',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('10 caracteres');
      }
    });

    it('deve rejeitar endereço muito longo', () => {
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        endereco: 'a'.repeat(501),
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('500 caracteres');
      }
    });
  });

  describe('campo data', () => {
    it('deve rejeitar data no passado', () => {
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        data: '2020-01-01',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('hoje ou futura');
      }
    });

    it('deve aceitar data de hoje', () => {
      const today = new Date().toISOString().split('T')[0];
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        data: today,
      });
      expect(result.success).toBe(true);
    });
  });

  describe('campo horario', () => {
    it('deve rejeitar horário vazio', () => {
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        horario: '',
      });
      expect(result.success).toBe(false);
    });
  });

  describe('campo observacoes (opcional)', () => {
    it('deve aceitar sem observações', () => {
      const result = coletaDomiciliarSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('deve aceitar observações válidas', () => {
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        observacoes: 'Jejum de 12 horas',
      });
      expect(result.success).toBe(true);
    });

    it('deve rejeitar observações muito longas', () => {
      const result = coletaDomiciliarSchema.safeParse({
        ...validData,
        observacoes: 'a'.repeat(1001),
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('1000 caracteres');
      }
    });
  });
});

describe('contactFormSchema', () => {
  const validData = {
    name: 'João Silva',
    email: 'joao@example.com',
    message: 'Gostaria de mais informações',
  };

  it('deve aceitar dados válidos', () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  describe('campo email', () => {
    it('deve rejeitar email inválido', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        email: 'email-invalido',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('E-mail inválido');
      }
    });

    it('deve aceitar emails válidos', () => {
      const validEmails = [
        'test@example.com',
        'user.name@example.com',
        'user+tag@example.co.uk',
      ];

      validEmails.forEach(email => {
        const result = contactFormSchema.safeParse({
          ...validData,
          email,
        });
        expect(result.success).toBe(true);
      });
    });

    it('deve remover espaços em branco', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        email: '  test@example.com  ',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.email).toBe('test@example.com');
      }
    });
  });

  describe('campo message', () => {
    it('deve rejeitar mensagem muito curta', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        message: 'Oi',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('10 caracteres');
      }
    });

    it('deve rejeitar mensagem muito longa', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        message: 'a'.repeat(1001),
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('1000 caracteres');
      }
    });
  });

  describe('campo whatsapp (opcional)', () => {
    it('deve aceitar sem whatsapp', () => {
      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('deve aceitar whatsapp válido', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        whatsapp: '(32) 99199-0239',
      });
      expect(result.success).toBe(true);
    });

    it('deve rejeitar whatsapp inválido', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        whatsapp: '123456',
      });
      expect(result.success).toBe(false);
    });
  });
});
