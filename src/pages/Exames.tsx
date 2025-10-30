import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialCard from "@/components/TestimonialCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Search, ArrowRight, CheckCircle2, Activity, Heart, Users } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Exames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "rotina", label: "Exames de Rotina" },
    { id: "especializado", label: "Exames Especializados" },
    { id: "hormonal", label: "Hormonais" },
  ];

  const exames = [
    {
      slug: "hemograma-completo",
      name: "Hemograma Completo",
      category: "rotina",
      description: "Avaliação completa das células sanguíneas para detectar anemias, infecções e outras condições",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
    },
    {
      slug: "glicemia-jejum",
      name: "Glicemia de Jejum",
      category: "rotina",
      description: "Medição dos níveis de açúcar no sangue, fundamental para diagnóstico de diabetes",
      preparo: "Jejum de 8 horas",
      tempo: "24 horas",
    },
    {
      slug: "hemoglobina-glicada",
      name: "Hemoglobina Glicada (HbA1c)",
      category: "especializado",
      description: "Avalia o controle da glicemia nos últimos 3 meses, essencial para diabéticos",
      preparo: "Não requer jejum",
      tempo: "24-48 horas",
    },
    {
      slug: "colesterol-total-fracoes",
      name: "Colesterol Total e Frações",
      category: "rotina",
      description: "Análise completa do perfil lipídico (HDL, LDL, VLDL e triglicérides)",
      preparo: "Jejum de 12 horas",
      tempo: "24 horas",
    },
    {
      slug: "tsh-t4-livre",
      name: "TSH e T4 Livre",
      category: "hormonal",
      description: "Avaliação completa da função da tireoide",
      preparo: "Não requer jejum",
      tempo: "48 horas",
    },
    {
      slug: "creatinina-ureia",
      name: "Creatinina e Ureia",
      category: "rotina",
      description: "Avaliação da função renal",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
    },
    {
      slug: "tgo-tgp",
      name: "TGO e TGP",
      category: "rotina",
      description: "Enzimas hepáticas para avaliação da função do fígado",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
    },
    {
      slug: "vhs",
      name: "VHS (Velocidade de Hemossedimentação)",
      category: "especializado",
      description: "Detecção de processos inflamatórios e infecciosos no organismo",
      preparo: "Não requer jejum",
      tempo: "24 horas",
    },
    {
      slug: "pcr",
      name: "Proteína C Reativa (PCR)",
      category: "especializado",
      description: "Marcador de inflamação e risco cardiovascular",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
    },
    {
      slug: "testosterona-total",
      name: "Testosterona Total",
      category: "hormonal",
      description: "Dosagem hormonal importante para homens e atletas",
      preparo: "Jejum de 8 horas, coletar pela manhã",
      tempo: "48-72 horas",
    },
    {
      slug: "vitamina-d",
      name: "Vitamina D (25-OH)",
      category: "especializado",
      description: "Avaliação dos níveis de vitamina D, importante para saúde óssea e imunidade",
      preparo: "Não requer jejum",
      tempo: "48-72 horas",
    },
    {
      slug: "psa",
      name: "PSA (Antígeno Prostático Específico)",
      category: "especializado",
      description: "Rastreamento de saúde da próstata em homens acima de 40 anos",
      preparo: "Não requer jejum, evitar relações sexuais 48h antes",
      tempo: "48 horas",
    },
    {
      slug: "beta-hcg",
      name: "Beta HCG",
      category: "hormonal",
      description: "Teste de gravidez quantitativo, também usado em acompanhamento de gestação",
      preparo: "Não requer jejum",
      tempo: "24 horas",
    },
    {
      slug: "ck",
      name: "Creatina Quinase (CK)",
      category: "especializado",
      description: "Avalia lesões musculares, importante para atletas",
      preparo: "Jejum de 4 horas, evitar exercícios intensos 24h antes",
      tempo: "24 horas",
    },
    {
      slug: "acido-urico",
      name: "Ácido Úrico",
      category: "rotina",
      description: "Diagnóstico de gota e avaliação do metabolismo de purinas",
      preparo: "Jejum de 8 horas",
      tempo: "24 horas",
    },
  ];

  const filteredExames = exames.filter((exame) => {
    const matchesSearch = exame.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || exame.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const checkups = [
    {
      id: "tireoide",
      name: "Check-up da Tireoide",
      icon: Activity,
      description: "Avaliação da função tireoidiana com exames essenciais.",
      color: "text-primary",
      price: "Consulte valores",
      preparation: "Não requer jejum",
      justification: "Esses exames ajudam a diagnosticar doenças tireoidianas como o hipotireoidismo ou hipertireoidismo, comuns em mulheres após 40 anos.",
      exams: [
        { name: "TSH", description: "Avalia a função da tireoide." },
        { name: "T4 Livre", description: "Mede os níveis de hormônio tireoidiano livre." },
      ],
    },
    {
      id: "colesterol",
      name: "Check-up do Colesterol",
      icon: Heart,
      description: "Avaliação completa dos níveis de colesterol e risco cardiovascular.",
      color: "text-secondary",
      price: "Consulte valores",
      preparation: "Jejum de 12 horas",
      justification: "Esses exames são essenciais para identificar o risco de doenças cardiovasculares e acidentes vasculares cerebrais (AVC).",
      exams: [
        { name: "Colesterol Total", description: "Mede o colesterol total no sangue." },
        { name: "HDL", description: "Mede o colesterol bom." },
        { name: "LDL", description: "Mede o colesterol ruim." },
        { name: "Triglicerídeos", description: "Mede a quantidade de gordura no sangue." },
      ],
    },
    {
      id: "rim",
      name: "Check-up do Rim",
      icon: Activity,
      description: "Exames para monitorar a saúde renal e identificar possíveis problemas nos rins.",
      color: "text-accent",
      price: "Consulte valores",
      preparation: "Jejum de 8 horas",
      justification: "Esses exames ajudam a detectar problemas renais precocemente, especialmente em pessoas com histórico de doenças renais.",
      exams: [
        { name: "Creatinina", description: "Avalia a função renal." },
        { name: "Ureia", description: "Verifica o funcionamento dos rins." },
        { name: "Exame de Urina Completo", description: "Verifica a presença de substâncias anormais na urina." },
      ],
    },
    {
      id: "diabetes",
      name: "Check-up do Diabetes",
      icon: Activity,
      description: "Exames para detectar e monitorar o diabetes, avaliando o risco de complicações.",
      color: "text-primary",
      price: "Consulte valores",
      preparation: "Jejum de 8 horas",
      justification: "Esses exames são fundamentais para o diagnóstico e controle do diabetes, além de avaliar o risco de complicações cardiovasculares e renais.",
      exams: [
        { name: "Glicemia em Jejum", description: "Mede os níveis de glicose no sangue." },
        { name: "Hemoglobina Glicada", description: "Mede o controle glicêmico a longo prazo." },
        { name: "Colesterol Total e Frações", description: "Avalia o risco cardiovascular associado ao diabetes." },
      ],
    },
    {
      id: "coracao",
      name: "Check-up do Coração",
      icon: Heart,
      description: "Exames essenciais para monitorar a saúde do coração e prevenir doenças cardiovasculares.",
      color: "text-secondary",
      price: "Consulte valores",
      preparation: "Não requer jejum",
      justification: "Esses exames são essenciais para monitorar a saúde do coração, prevenir doenças como infarto e AVC e controlar a hipertensão.",
      exams: [
        { name: "Eletrocardiograma (ECG)", description: "Detecta alterações no ritmo cardíaco." },
        { name: "Pressão Arterial", description: "Avalia a pressão sanguínea e o risco de hipertensão." },
        { name: "Colesterol Total e Frações", description: "Avalia os níveis de colesterol para identificar riscos cardíacos." },
      ],
    },
  ];

  const testimonials = [
    { name: "João Silva", city: "Rio Pomba", rating: 5, text: "Excelente atendimento e resultados rápidos. Recomendo!", service: "Check-up Completo" },
    { name: "Maria Oliveira", city: "Mercês", rating: 5, text: "Profissionais qualificados e ambiente acolhedor.", service: "Exames de Rotina" },
    { name: "Carlos Santos", city: "Guarani", rating: 5, text: "Ótima experiência! Equipe muito atenciosa.", service: "Check-up Diabético" },
  ];

  const faqs = [
    { question: "Como agendar um exame?", answer: "Você pode agendar seu exame diretamente pelo nosso site, WhatsApp ou entrando em contato pelo telefone (32) 3642-2323." },
    { question: "Quais são os horários de atendimento?", answer: "Atendemos de segunda a sexta-feira, das 7h às 18h, e aos sábados das 7h às 12h." },
    { question: "Preciso fazer jejum para todos os exames?", answer: "Não. O jejum depende do tipo de exame. Consulte sempre as orientações específicas para cada exame ou entre em contato conosco." },
    { question: "Quanto tempo demora para sair o resultado?", answer: "O prazo varia conforme o exame, mas a maioria dos resultados fica pronta em 24 a 48 horas." },
    { question: "Vocês atendem convênios?", answer: "Sim! Trabalhamos com diversos convênios. Consulte a lista completa em nossa página de convênios." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Exames e Check-ups Labclin - Diagnóstico Preciso e Prevenção</title>
        <meta name="description" content="Descubra os check-ups completos oferecidos pelo Labclin para monitorar sua saúde com exames de alta qualidade. Check-ups da tireoide, colesterol, rim, diabetes e coração." />
        <meta name="keywords" content="check-ups personalizados, exames laboratoriais, saúde, diagnóstico precoce, prevenção de doenças, Labclin, Rio Pomba, tireoide, colesterol, diabetes" />
      </Helmet>
      
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-accent to-secondary py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Check-ups Personalizados para sua Saúde
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8">
                Escolha o check-up ideal para monitorar sua saúde e agende seu exame agora.
              </p>

              {/* Search */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar exame..."
                  className="pl-12 h-14 text-lg bg-card/95 backdrop-blur-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Link to="/agendar">
                <Button size="lg" variant="secondary" className="shadow-strong hover:scale-105 transition-transform text-lg px-8">
                  Agendar Check-up
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Check-ups Personalizados */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Check-ups Personalizados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pacotes completos de exames desenvolvidos para atender necessidades específicas de saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {checkups.map((checkup) => {
                const Icon = checkup.icon;
                return (
                  <Card key={checkup.id} className="hover:shadow-strong transition-all border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center ${checkup.color}`}>
                          <Icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl">{checkup.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{checkup.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Justification */}
                      <div className="mb-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                        <p className="text-sm text-foreground font-medium">{checkup.justification}</p>
                      </div>

                      {/* Preparation */}
                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <span className="font-semibold text-foreground">Preparo:</span>{" "}
                          <span className="text-muted-foreground">{checkup.preparation}</span>
                        </p>
                      </div>

                      {/* Exams List */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Exames inclusos:</h4>
                        {checkup.exams.map((exam, index) => (
                          <div key={index} className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                              <div>
                                <h5 className="font-semibold text-foreground mb-1">{exam.name}</h5>
                                <p className="text-sm text-muted-foreground">{exam.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Link to="/agendar">
                          <Button variant="outline" className="w-full">
                            Agendar Check-up
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  size="sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Exames List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredExames.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExames.map((exame) => (
                  <Card
                    key={exame.slug}
                    className="group hover:shadow-medium transition-all border-border hover:border-primary/50"
                  >
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <Badge variant="secondary" className="mb-2">
                          {categories.find((c) => c.id === exame.category)?.label}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exame.name}
                        </h3>
                      </div>

                      <p className="text-muted-foreground mb-4">{exame.description}</p>

                      <div className="space-y-2 text-sm mb-4">
                        <div>
                          <span className="font-medium text-foreground">Preparo:</span>{" "}
                          <span className="text-muted-foreground">{exame.preparo}</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Resultado:</span>{" "}
                          <span className="text-muted-foreground">{exame.tempo}</span>
                        </div>
                      </div>

                      <Link to={`/exames/${exame.slug}`}>
                        <Button
                          variant="ghost"
                          className="w-full justify-between p-0 h-auto font-medium text-primary hover:text-primary-hover"
                        >
                          Ver detalhes
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Nenhum exame encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O Que Nossos Pacientes Dizem
              </h2>
              <p className="text-lg text-muted-foreground">
                Experiências reais de quem confia no Labclin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre nossos exames e serviços
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para Cuidar da Sua Saúde?
            </h2>
            <p className="text-xl text-primary-foreground/95 mb-8 max-w-2xl mx-auto">
              Agende seu exame ou check-up agora mesmo e tenha resultados rápidos e precisos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button size="lg" variant="secondary" className="shadow-strong text-lg px-8">
                  Agendar Exame
                </Button>
              </Link>
              <a
                href="https://wa.me/553236422323?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20exames."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-card/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-card/30 text-lg px-8">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Exames;
