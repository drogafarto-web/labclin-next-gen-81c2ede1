/**
 * Funções utilitárias de formatação
 * Centraliza lógica de formatação duplicada
 */

/**
 * Formata número de telefone brasileiro no padrão (XX) XXXXX-XXXX
 * @param value - String contendo números de telefone
 * @returns String formatada
 */
export const formatWhatsApp = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length === 0) return "";
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
  
  // Limita a 11 dígitos
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

/**
 * Formata CEP no padrão XXXXX-XXX
 * @param value - String contendo números do CEP
 * @returns String formatada
 */
export const formatCEP = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length === 0) return "";
  if (numbers.length <= 5) return numbers;
  
  return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
};

/**
 * Formata telefone fixo no padrão (XX) XXXX-XXXX
 * @param value - String contendo números de telefone
 * @returns String formatada
 */
export const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length === 0) return "";
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6, 10)}`;
};

/**
 * Remove toda formatação de um número
 * @param value - String formatada
 * @returns Apenas números
 */
export const removeFormatting = (value: string): string => {
  return value.replace(/\D/g, "");
};
