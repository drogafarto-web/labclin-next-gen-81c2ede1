import { z } from "zod";

// Validador de WhatsApp brasileiro
const whatsappRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

// Schema para formulário de Check-up
export const checkupFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  whatsapp: z
    .string()
    .regex(whatsappRegex, "WhatsApp inválido. Use o formato: (32) 99999-9999"),
  age: z.enum(["18-25", "26-35", "36-45", "46-55", "56-65", "65+"], {
    errorMap: () => ({ message: "Selecione uma faixa etária válida" }),
  }),
  sexo: z.enum(["Masculino", "Feminino"], {
    errorMap: () => ({ message: "Selecione o sexo" }),
  }).optional(),
  condicoes: z.array(z.string()).optional(),
});

// Schema para formulário de Coleta Domiciliar
export const coletaDomiciliarSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  whatsapp: z
    .string()
    .regex(whatsappRegex, "WhatsApp inválido. Use o formato: (32) 99999-9999"),
  endereco: z
    .string()
    .trim()
    .min(10, "Endereço deve ter pelo menos 10 caracteres")
    .max(500, "Endereço deve ter no máximo 500 caracteres"),
  data: z
    .string()
    .min(1, "Selecione uma data")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Data deve ser hoje ou futura"),
  horario: z.string().min(1, "Selecione um horário"),
  observacoes: z.string().max(1000, "Observações devem ter no máximo 1000 caracteres").optional(),
});

// Schema para formulário de Contato (caso necessário no futuro)
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  whatsapp: z
    .string()
    .regex(whatsappRegex, "WhatsApp inválido. Use o formato: (32) 99999-9999")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

// Tipos inferidos dos schemas
export type CheckupFormData = z.infer<typeof checkupFormSchema>;
export type ColetaDomiciliarFormData = z.infer<typeof coletaDomiciliarSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
