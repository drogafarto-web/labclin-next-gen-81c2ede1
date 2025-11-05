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
import { Sparkles } from "lucide-react";

const CheckupForm = () => {
  const [step, setStep] = useState<"initial" | "details" | "results">("initial");
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    age: "",
    sexo: "",
    condicoes: [] as string[],
  });
  const [recommendations, setRecommendations] = useState<any>(null);

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

  const handleGenerateCheckup = () => {
    if (!formData.name || !formData.whatsapp || !formData.age) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setStep("details");
  };

  const handleGenerateRecommendations = () => {
    if (!formData.sexo) {
      toast.error("Por favor, selecione o sexo.");
      return;
    }

    // Simular geração de recomendações baseadas nos dados
    const recs = {
      economico: ["Hemograma Completo", "Glicose em Jejum", "Colesterol Total", "Creatinina", "Urina Tipo 1", "TSH"],
      normal: ["Hemograma Completo", "Glicose em Jejum", "Colesterol Total e Frações", "Triglicerídeos", "Creatinina e Ureia", "Ácido Úrico", "Urina Tipo 1", "TGO/TGP", "TSH", "Fezes"],
      avancado: ["Todos os exames do Perfil Normal", "Vitamina D", "Ferritina", "Cálcio", "Gama GT", "Eletroforese", formData.sexo === "Masculino" && formData.age.includes("50+") ? "PSA" : "", formData.sexo === "Feminino" && formData.age.includes("40+") ? "Mamografia" : "", "Ultrassom Abdominal", "Marcadores Tumorais"].filter(Boolean),
    };

    setRecommendations(recs);
    setStep("results");
  };

  const handleSubmit = () => {
    const condicoesText = formData.condicoes.length > 0 ? formData.condicoes.join(", ") : "Nenhuma";

    const mensagem = `Olá Labclin! 👋\n\nGostaria de receber uma proposta de checkup personalizado:\n\n👤 Nome: ${formData.name}\n📱 WhatsApp: ${formData.whatsapp}\n🎂 Faixa Etária: ${formData.age}\n⚧️ Sexo: ${formData.sexo}\n🏥 Condições: ${condicoesText}\n\nTenho interesse nos perfis sugeridos e aguardo orçamento com desconto especial! 🎁`;

    const urlWhatsApp = `https://wa.me/5532991990239?text=${encodeURIComponent(mensagem)}`;

    toast.success("Redirecionando para o WhatsApp do Labclin...");
    window.open(urlWhatsApp, "_blank");

    setTimeout(() => {
      setStep("initial");
      setFormData({
        name: "",
        whatsapp: "",
        age: "",
        sexo: "",
        condicoes: [],
      });
      setRecommendations(null);
    }, 2000);
  };

  const handleReset = () => {
    setStep("initial");
    setFormData({
      name: "",
      whatsapp: "",
      age: "",
      sexo: "",
      condicoes: [],
    });
    setRecommendations(null);
  };

  return (
    <div className="bg-background rounded-2xl shadow-lg max-w-2xl mx-auto p-8 md:p-12 border border-border">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Check-up Personalizado com IA</h2>
        <p className="text-muted-foreground">Descubra os exames ideais para seu perfil</p>
      </div>

      {/* ETAPA 1: Campos Iniciais */}
      {step === "initial" && (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Nome Completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-2 focus:border-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-sm font-medium">
              WhatsApp (com DDD)
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(32) 99999-9999"
              value={formData.whatsapp}
              onChange={handleWhatsAppChange}
              className="border-2 focus:border-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium">
              Faixa Etária
            </Label>
            <Select
              value={formData.age}
              onValueChange={(value) => setFormData({ ...formData, age: value })}
              required
            >
              <SelectTrigger className="border-2 focus:border-foreground">
                <SelectValue placeholder="Selecione sua faixa etária" />
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

          <Button
            onClick={handleGenerateCheckup}
            className="w-full h-12 text-base font-bold bg-foreground text-background hover:bg-foreground/90 gap-2 mt-8"
            type="button"
          >
            <Sparkles className="h-5 w-5" />
            Gerar Check-up
          </Button>
        </div>
      )}

      {/* ETAPA 2: Detalhes Adicionais */}
      {step === "details" && (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Sexo</Label>
            <RadioGroup
              value={formData.sexo}
              onValueChange={(value) => setFormData({ ...formData, sexo: value })}
              className="flex gap-4"
              required
            >
              <div className="flex items-center space-x-2 flex-1 p-4 rounded-lg border-2 border-border has-[:checked]:border-foreground has-[:checked]:bg-muted transition-all">
                <RadioGroupItem value="Masculino" id="male" />
                <Label htmlFor="male" className="cursor-pointer font-medium flex-1">
                  Masculino
                </Label>
              </div>
              <div className="flex items-center space-x-2 flex-1 p-4 rounded-lg border-2 border-border has-[:checked]:border-foreground has-[:checked]:bg-muted transition-all">
                <RadioGroupItem value="Feminino" id="female" />
                <Label htmlFor="female" className="cursor-pointer font-medium flex-1">
                  Feminino
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Condições de Saúde (opcional)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "diabetes", label: "Diabetes" },
                { id: "hipertensao", label: "Hipertensão" },
                { id: "colesterol", label: "Colesterol Alto" },
                { id: "obesidade", label: "Obesidade" },
                { id: "historico", label: "Histórico Familiar" },
                { id: "nenhuma", label: "Nenhuma" },
              ].map((condicao) => (
                <div
                  key={condicao.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border-2 border-border has-[:checked]:border-foreground has-[:checked]:bg-muted transition-all cursor-pointer"
                >
                  <Checkbox
                    id={condicao.id}
                    checked={formData.condicoes.includes(condicao.label)}
                    onCheckedChange={(checked) => handleCondicoesChange(condicao.label, checked as boolean)}
                  />
                  <Label htmlFor={condicao.id} className="cursor-pointer font-medium flex-1 text-sm">
                    {condicao.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1 h-12 font-semibold border-2"
              type="button"
            >
              Voltar
            </Button>
            <Button
              onClick={handleGenerateRecommendations}
              className="flex-1 h-12 text-base font-bold bg-foreground text-background hover:bg-foreground/90 gap-2"
              type="button"
            >
              <Sparkles className="h-5 w-5" />
              Gerar Recomendações
            </Button>
          </div>
        </div>
      )}

      {/* ETAPA 3: Resultados e Resumo */}
      {step === "results" && recommendations && (
        <div className="space-y-6 animate-fade-in">
          {/* Resumo das Informações */}
          <div className="bg-muted/50 rounded-xl p-6 border-2 border-border">
            <h3 className="font-bold text-lg mb-4">Seu Perfil</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Nome:</span> {formData.name}</p>
              <p><span className="font-semibold">WhatsApp:</span> {formData.whatsapp}</p>
              <p><span className="font-semibold">Faixa Etária:</span> {formData.age} anos</p>
              <p><span className="font-semibold">Sexo:</span> {formData.sexo}</p>
              {formData.condicoes.length > 0 && (
                <p><span className="font-semibold">Condições:</span> {formData.condicoes.join(", ")}</p>
              )}
            </div>
          </div>

          {/* Recomendações de Checkup */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-center">Perfis de Check-up Recomendados</h3>

            <div className="bg-gradient-to-br from-muted/30 to-background border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground">E</div>
                <h4 className="font-bold text-base">Perfil Econômico</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Ideal para prevenção básica</p>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                {recommendations.economico.map((exam: string, i: number) => (
                  <li key={i}>{exam}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-background border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground">N</div>
                <h4 className="font-bold text-base">Perfil Normal</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Triagem metabólica completa</p>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                {recommendations.normal.map((exam: string, i: number) => (
                  <li key={i}>{exam}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-background border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground">A</div>
                <h4 className="font-bold text-base">Perfil Avançado</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Acompanhamento detalhado completo</p>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                {recommendations.avancado.map((exam: string, i: number) => (
                  <li key={i}>{exam}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1 h-12 font-semibold border-2"
              type="button"
            >
              Refazer
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 h-12 text-base font-bold bg-[#D4AF37] text-black hover:bg-[#B8961F] gap-2"
              type="button"
            >
              Enviar ao Labclin + Desconto
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckupForm;
