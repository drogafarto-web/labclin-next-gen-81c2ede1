/**
 * Constantes centralizadas do projeto
 * IMPORTANTE: Dados sensíveis devem estar em variáveis de ambiente
 */

export const CONTACTS = {
  WHATSAPP_MAIN: "5532991990239",
  WHATSAPP_DISPLAY: "(32) 99199-0239",
  EMAIL_MAIN: "llabclin3@gmail.com",
  EMAIL_CONTACT: "llabclin3@gmail.com",
  PHONE_RIO_POMBA: "(32) 3571-1599",
  PHONE_MERCES: "(32) 99967-1581",
  PHONE_GUARANI: "(32) 99942-2574",
  PHONE_SILVERANIA: "(32) 99959-2154",
} as const;

export const UNITS = [
  {
    name: "Rio Pomba",
    address: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro",
    city: "Rio Pomba - MG",
    cep: "36180-000",
    phone: CONTACTS.PHONE_RIO_POMBA,
    whatsapp: CONTACTS.WHATSAPP_MAIN,
    whatsappDisplay: CONTACTS.WHATSAPP_DISPLAY,
    hours: {
      weekdays: "Segunda a Sexta: 6:30 às 17:30",
      saturday: "Sábado: 7:00 às 11:00",
      sunday: "Domingo e feriados: Fechado",
    },
  },
  {
    name: "Mercês",
    address: "Praça Dr. Castelões, 40 - Centro",
    city: "Mercês - MG",
    cep: "36190-000",
    phone: CONTACTS.PHONE_MERCES,
    whatsapp: "5532999671581",
    whatsappDisplay: CONTACTS.PHONE_MERCES,
    hours: {
      weekdays: "Segunda a Sexta: 6:45 às 11:45",
      saturday: "Fechado",
      sunday: "Domingo e feriados: Fechado",
    },
  },
  {
    name: "Guarani",
    address: "Rua José Ladeira Pinto, 70 - Bairro Sossego",
    city: "Guarani - MG",
    cep: "36160-000",
    phone: CONTACTS.PHONE_GUARANI,
    whatsapp: "5532999422574",
    whatsappDisplay: CONTACTS.PHONE_GUARANI,
    hours: {
      weekdays: "Segunda a Sexta: 6:45 às 15:30",
      saturday: "Fechado",
      sunday: "Domingo e feriados: Fechado",
    },
  },
  {
    name: "Silveirânia",
    address: "Rua Padre Cerqueira, 20 - Centro",
    city: "Silveirânia - MG",
    cep: "36185-000",
    phone: CONTACTS.PHONE_SILVERANIA,
    whatsapp: "5532999592154",
    whatsappDisplay: CONTACTS.PHONE_SILVERANIA,
    hours: {
      weekdays: "Segunda a Sexta: 7:00 às 11:00",
      saturday: "Fechado",
      sunday: "Domingo e feriados: Fechado",
    },
  },
] as const;

export const SOCIAL_MEDIA = {
  INSTAGRAM: "https://instagram.com/labclinmg",
  FACEBOOK: "https://facebook.com/labclinmg",
} as const;

export const WHATSAPP_MESSAGES = {
  AGENDAMENTO: "Olá! Gostaria de agendar um exame.",
  AGENDAR_EXAME: "Olá! Gostaria de agendar um exame.",
  COLETA_DOMICILIAR: "Olá! Gostaria de agendar um serviço de comodidade Labclin.",
  INFORMACOES: "Olá! Gostaria de mais informações.",
  AGENDAR_COLETA: "Quero agendar coleta",
} as const;

/**
 * Gera URL do WhatsApp com número e mensagem
 * Usa wa.me que funciona em todos os navegadores
 */
export const getWhatsAppUrl = (phone: string, message: string): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
