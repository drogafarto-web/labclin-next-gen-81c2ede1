import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatWhatsApp } from "@/utils/formatters";
import { sanitizeInput } from "@/utils/sanitizers";

interface WhatsAppInputProps {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
  className?: string;
}

/**
 * Componente reutilizável para input de WhatsApp
 * Já inclui formatação automática e sanitização
 */
const WhatsAppInput = ({
  id = "whatsapp",
  name = "whatsapp",
  label = "WhatsApp (com DDD)",
  value,
  onChange,
  required = false,
  placeholder = "(32) 99999-9999",
  error,
  className = "",
}: WhatsAppInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeInput(e.target.value);
    const formatted = formatWhatsApp(sanitized);
    onChange(formatted);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <Label htmlFor={id} className="text-sm font-medium">
          {label} {required && "*"}
        </Label>
      )}
      <Input
        id={id}
        name={name}
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        maxLength={15}
        className={error ? "border-destructive" : ""}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default WhatsAppInput;
