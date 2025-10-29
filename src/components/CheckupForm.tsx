import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const CheckupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    age: "",
    sexo: "",
    condicoes: [] as string[],
  });
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      if (value.length <= 2) {
        value = `(${value}`;
      } else if (value.length <= 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      }
    }
    setFormData({ ...formData, whatsapp: value });
  };

  const handleCondicoesChange = (value: string, checked: boolean) => {
    const newCondicoes = checked
      ? [...formData.condicoes, value]
      : formData.condicoes.filter((c) => c !== value);
    setFormData({ ...formData, condicoes: newCondicoes });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const condicoesText = formData.condicoes.length > 0 ? formData.condicoes.join(", ") : "Nenhuma";

    const mensagem = `Olá Labclin! 👋\n\nGostaria de receber uma proposta de checkup personalizado:\n\n👤 Nome: ${formData.name}\n📱 WhatsApp: ${formData.whatsapp}\n🎂 Faixa Etária: ${formData.age}\n⚧️ Sexo: ${formData.sexo}\n🏥 Condições: ${condicoesText}\n\nTenho interesse nos perfis sugeridos e aguardo orçamento com desconto especial! 🎁`;

    const urlWhatsApp = `https://wa.me/55${formData.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`;

    toast.success("Dados enviados com sucesso! Você receberá uma proposta com desconto especial no WhatsApp.");

    window.open(urlWhatsApp, "_blank");

    setTimeout(() => {
      setFormData({
        name: "",
        whatsapp: "",
        age: "",
        sexo: "",
        condicoes: [],
      });
      setShowRecommendations(false);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      whatsapp: "",
      age: "",
      sexo: "",
      condicoes: [],
    });
    setShowRecommendations(false);
  };

  return (
    <div className="bg-card rounded-2xl shadow-elegant max-w-2xl mx-auto p-8 md:p-10">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3 animate-float">💊</div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Labclin</h2>
        <p className="text-muted-foreground font-medium">Checkup Personalizado Conforme Seu Perfil</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold">
            👤 Nome Completo *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-muted/50 border-2 focus:bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-sm font-semibold">
            📱 WhatsApp (com DDD) *
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="(11) 9999-9999"
            value={formData.whatsapp}
            onChange={handleWhatsAppChange}
            required
            className="bg-muted/50 border-2 focus:bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age" className="text-sm font-semibold">
            🎂 Faixa Etária *
          </Label>
          <Select
            value={formData.age}
            onValueChange={(value) => {
              setFormData({ ...formData, age: value });
              setShowRecommendations(true);
            }}
            required
          >
            <SelectTrigger className="bg-muted/50 border-2">
              <SelectValue placeholder="Selecione sua idade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-25">18 a 25 anos</SelectItem>
              <SelectItem value="26-35">26 a 35 anos</SelectItem>
              <SelectItem value="36-45">36 a 45 anos</SelectItem>
              <SelectItem value="46-55">46 a 55 anos</SelectItem>
              <SelectItem value="56-65">56 a 65 anos</SelectItem>
              <SelectItem value="65+">Acima de 65 anos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold">⚧️ Sexo *</Label>
          <RadioGroup
            value={formData.sexo}
            onValueChange={(value) => setFormData({ ...formData, sexo: value })}
            className="flex gap-4"
            required
          >
            <div className="flex items-center space-x-2 flex-1 p-3 rounded-lg border-2 border-border bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/10 transition-all">
              <RadioGroupItem value="Masculino" id="male" />
              <Label htmlFor="male" className="cursor-pointer font-medium flex-1">
                Masculino
              </Label>
            </div>
            <div className="flex items-center space-x-2 flex-1 p-3 rounded-lg border-2 border-border bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/10 transition-all">
              <RadioGroupItem value="Feminino" id="female" />
              <Label htmlFor="female" className="cursor-pointer font-medium flex-1">
                Feminino
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold">🏥 Condições de Saúde (selecione se aplicável)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: "diabetes", label: "Diabetes" },
              { id: "hipertensao", label: "Hipertensão" },
              { id: "colesterol", label: "Colesterol Elevado" },
              { id: "obesity", label: "Obesidade" },
              { id: "hf", label: "Histórico Familiar" },
              { id: "nenhuma", label: "Nenhuma Condição" },
            ].map((condicao) => (
              <div
                key={condicao.id}
                className="flex items-center space-x-2 p-3 rounded-lg border-2 border-border bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/10 transition-all cursor-pointer"
              >
                <Checkbox
                  id={condicao.id}
                  checked={formData.condicoes.includes(condicao.label)}
                  onCheckedChange={(checked) => handleCondicoesChange(condicao.label, checked as boolean)}
                />
                <Label htmlFor={condicao.id} className="cursor-pointer font-medium flex-1">
                  {condicao.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Button type="submit" size="lg" className="w-full text-base font-bold gap-2">
            <span>📱</span>
            ENVIAR PELO WHATSAPP COM DESCONTO 🎁
          </Button>
          <Button type="button" variant="outline" size="lg" onClick={handleReset} className="w-full font-semibold">
            🔄 Limpar
          </Button>
        </div>
      </form>

      {showRecommendations && (
        <div className="mt-8 space-y-4 animate-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-bold text-center text-foreground mb-4">💡 Sugestões de Checkup para Você</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-primary rounded-xl p-5 hover:shadow-medium hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">💰</span>
                <h4 className="text-primary font-bold">Perfil Econômico</h4>
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-3">
                ✓ Ideal para prevenção básica e rastreamento inicial
              </p>
              <div className="bg-background rounded-lg p-3 border">
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground font-medium">
                  <li>Hemograma Completo</li>
                  <li>Glicose em Jejum</li>
                  <li>Colesterol Total e Frações</li>
                  <li>Creatinina</li>
                  <li>Urina Tipo 1</li>
                  <li>TSH</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-primary rounded-xl p-5 hover:shadow-medium hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">🔍</span>
                <h4 className="text-primary font-bold">Perfil Normal</h4>
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-3">
                ✓ Abrange rotina padrão com triagem metabólica completa
              </p>
              <div className="bg-background rounded-lg p-3 border">
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground font-medium">
                  <li>Hemograma Completo</li>
                  <li>Glicose em Jejum</li>
                  <li>Colesterol Total e Frações</li>
                  <li>Triglicerídeos</li>
                  <li>Creatinina e Ureia</li>
                  <li>Ácido Úrico</li>
                  <li>Urina Tipo 1</li>
                  <li>TGO / TGP</li>
                  <li>TSH</li>
                  <li>Exame de Fezes</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-primary rounded-xl p-5 hover:shadow-medium hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">🏥</span>
                <h4 className="text-primary font-bold">Perfil Avançado</h4>
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-3">
                ✓ Acompanhamento detalhado com fatores de risco e triagem oncológica
              </p>
              <div className="bg-background rounded-lg p-3 border">
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground font-medium">
                  <li>Todos os exames do Perfil Normal +</li>
                  <li>Vitamina D</li>
                  <li>Ferritina</li>
                  <li>Cálcio</li>
                  <li>Gama GT</li>
                  <li>Eletroforese de Proteínas</li>
                  <li>PSA (Homens &gt; 50 anos)</li>
                  <li>Mamografia (Mulheres &gt; 40 anos)</li>
                  <li>Ultrassonografia Abdominal</li>
                  <li>Marcadores Tumorais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckupForm;
