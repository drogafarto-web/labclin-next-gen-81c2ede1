import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Search, MessageCircle, Phone, HelpCircle, Baby, Truck, TestTube, MapPin, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACTS, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/constants";

// FAQ Data organized by category
const faqCategories = [
  {
    id: "comum",
    title: "Dúvidas Mais Comuns",
    icon: HelpCircle,
    faqs: [
      {
        question: "Preciso agendar horário para fazer exames de sangue?",
        answer: "Para a grande maioria dos exames de rotina (hemograma, colesterol, glicose), não é necessário agendar. O atendimento é por ordem de chegada. Chegue cedo! Apenas exames muito específicos podem exigir agendamento, na dúvida, chame no WhatsApp."
      },
      {
        question: "É obrigatório ter pedido médico?",
        answer: "Depende. Se for usar convênio (Unimed, Casu, etc.), sim, é obrigatório. Se for particular, muitos exames (como Sexagem Fetal e Teste de Gravidez) podem ser feitos sem pedido."
      },
      {
        question: "Todo exame de sangue precisa de jejum?",
        answer: "Não. Muitos exames modernos não exigem mais jejum. Outros, como Glicose e Colesterol, ainda podem exigir 8 a 12 horas. Sempre consulte nossa equipe pelo WhatsApp na véspera para ter certeza."
      },
      {
        question: "Vocês fazem Ultrassom ou Raio-X?",
        answer: "Não. O Labclin é especializado exclusivamente em Análises Clínicas (exames de sangue, urina, fezes). Não realizamos exames de imagem. Porém, fazemos todos os exames de sangue complementares que seu médico pede junto com o ultrassom (como Beta HCG e pré-natal)."
      },
      {
        question: "Em quanto tempo sai o resultado?",
        answer: "A maioria dos exames de rotina fica pronta no mesmo dia ou em 24h. Exames mais complexos (como Sexagem Fetal ou genéticos) podem levar de 3 a 5 dias úteis."
      },
      {
        question: "Preciso buscar o resultado impresso no laboratório?",
        answer: "Não. Você pode pegar seus resultados online pelo nosso site ou WhatsApp, com login e senha. É seguro e prático."
      },
      {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos dinheiro, PIX e principais cartões de crédito e débito."
      },
      {
        question: "Vocês atendem crianças?",
        answer: "Sim! Nossa equipe é treinada para coleta infantil humanizada ('mãozinha leve'), inclusive em recém-nascidos para o Teste do Pezinho."
      },
      {
        question: "O Labclin abre aos sábados?",
        answer: "Sim, a unidade de Rio Pomba abre aos sábados de manhã para coletas. As demais unidades (Mercês, Guarani e Silveirânia) funcionam apenas de segunda a sexta."
      },
      {
        question: "Como faço para entrar em contato rápido?",
        answer: "O jeito mais rápido é pelo nosso WhatsApp central. Clique no botão verde no canto da tela."
      }
    ]
  },
  {
    id: "sexagem",
    title: "Sexagem Fetal e Gestantes",
    icon: Baby,
    faqs: [
      {
        question: "Com quantas semanas posso fazer a Sexagem Fetal?",
        answer: "A partir da 8ª semana completa de gestação. Antes disso, a quantidade de DNA fetal pode ser insuficiente."
      },
      {
        question: "A Sexagem Fetal precisa de jejum ou pedido médico?",
        answer: "Não precisa de jejum e não precisa de pedido médico."
      },
      {
        question: "Qual o valor da Sexagem Fetal no Labclin?",
        answer: "Trabalhamos com um valor promocional de R$ 140,00 (sujeito a alterações, confirme no WhatsApp)."
      },
      {
        question: "O exame de sexagem fetal pode dar errado?",
        answer: "O exame tem 99% de precisão a partir da 8ª semana. Erros são raríssimos e geralmente ocorrem se feito muito cedo ou se a mãe recebeu transfusão de sangue recente. Em caso de gêmeos, se der 'masculino', pelo menos um é menino. Se der 'feminino', ambos são meninas."
      },
      {
        question: "Vocês fazem o Beta HCG Quantitativo?",
        answer: "Sim, realizamos o Beta HCG (teste de gravidez no sangue) com resultado rápido. Não precisa de jejum."
      }
    ]
  },
  {
    id: "toxicologico",
    title: "Exame Toxicológico (CNH e Empresas)",
    icon: Truck,
    faqs: [
      {
        question: "Vocês fazem o Toxicológico para CNH?",
        answer: "Sim, realizamos o exame exigido pelo Detran para renovação, adição ou mudança de categorias C, D e E."
      },
      {
        question: "Como é feita a coleta do Toxicológico?",
        answer: "É feita através de uma pequena amostra de cabelos ou pelos do corpo. É indolor e não precisa de jejum."
      },
      {
        question: "O resultado do Toxicológico vai direto para o Detran?",
        answer: "Sim, após a liberação do laudo pelo laboratório de apoio, o resultado é inserido automaticamente no sistema do Renach/Detran."
      },
      {
        question: "Serve para admissão e demissão em empresas (CLT)?",
        answer: "Sim, realizamos também o toxicológico ocupacional para motoristas profissionais (CAGED)."
      }
    ]
  },
  {
    id: "preparo",
    title: "Preparo e Coleta de Exames",
    icon: TestTube,
    faqs: [
      {
        question: "Posso beber água durante o jejum?",
        answer: "Sim, água pura (sem gás ou sabor) pode ser bebida em pequenas quantidades e não quebra o jejum. Café, chá ou suco quebram o jejum."
      },
      {
        question: "Posso tomar meus remédios antes do exame?",
        answer: "Geralmente sim, com pouca água. Mas informe sempre a nossa equipe na recepção quais medicamentos você usa, pois alguns podem interferir em exames específicos."
      },
      {
        question: "Como faço a coleta de fezes e urina?",
        answer: "Você deve retirar os frascos coletores estéreis em qualquer uma de nossas unidades antes da coleta. A coleta deve ser feita preferencialmente em casa, seguindo as instruções que lhe passaremos."
      },
      {
        question: "Bebida alcoólica interfere no exame?",
        answer: "Sim. Recomendamos não consumir bebidas alcoólicas por pelo menos 48 horas antes de exames de check-up, especialmente os que avaliam o fígado (TGO, TGP, Gama GT) e triglicérides."
      }
    ]
  },
  {
    id: "unidades",
    title: "Unidades e Atendimento Regional",
    icon: MapPin,
    faqs: [
      {
        question: "Onde fica a matriz do Labclin?",
        answer: "Nossa matriz fica em Rio Pomba, na Rua Floripes Maria de Jesus, 05, Centro."
      },
      {
        question: "Vocês têm laboratório em Mercês MG?",
        answer: "Sim, temos uma unidade no centro de Mercês, na Praça Dr. Castelões, 40."
      },
      {
        question: "Onde fica o laboratório em Guarani MG?",
        answer: "Nossa unidade em Guarani fica no Bairro Sossego, na Rua José Ladeira Pinto, 70."
      },
      {
        question: "O Labclin agora está em Silveirânia?",
        answer: "Sim! Nossa mais nova unidade fica no centro de Silveirânia, na Rua Padre Cerqueira, 20."
      },
      {
        question: "Os horários de coleta são os mesmos em todas as cidades?",
        answer: "Não, eles variam ligeiramente. Unidades menores como Silveirânia focam na coleta matinal, enquanto Guarani e Rio Pomba têm horários mais estendidos. Consulte a página da sua unidade no site para o horário exato."
      }
    ]
  },
  {
    id: "convenios",
    title: "Convênios e Particular",
    icon: CreditCard,
    faqs: [
      {
        question: "Quais convênios o Labclin aceita?",
        answer: "Aceitamos uma ampla rede, incluindo Unimed, Casu, Sus, Plasc, Santa Casa, IPSM, Promed, entre outros. A lista pode mudar, por isso sempre confirme o seu plano específico pelo WhatsApp antes da coleta."
      },
      {
        question: "Vocês fazem orçamento de exames particulares?",
        answer: "Sim. Se você tem um pedido médico e quer fazer particular, envie uma foto dele para nosso WhatsApp e faremos o orçamento na hora. Temos preços acessíveis para a região."
      }
    ]
  }
];

// Generate all FAQs for schema
const allFaqs = faqCategories.flatMap(category => category.faqs);

// Generate FAQPage Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Local Business Schema for context
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Labclin - Laboratório de Análises Clínicas",
  "url": "https://www.labclinmg.com.br",
  "telephone": "+55-32-3571-3712",
  "areaServed": [
    { "@type": "City", "name": "Rio Pomba", "addressRegion": "MG" },
    { "@type": "City", "name": "Mercês", "addressRegion": "MG" },
    { "@type": "City", "name": "Guarani", "addressRegion": "MG" },
    { "@type": "City", "name": "Silveirânia", "addressRegion": "MG" }
  ]
};

const DuvidasFrequentes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search term
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return faqCategories;

    const lowerSearch = searchTerm.toLowerCase();
    
    return faqCategories
      .map(category => ({
        ...category,
        faqs: category.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(lowerSearch) ||
            faq.answer.toLowerCase().includes(lowerSearch)
        )
      }))
      .filter(category => category.faqs.length > 0);
  }, [searchTerm]);

  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);

  const whatsappLink = getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, "Olá! Tenho uma dúvida que não encontrei no site.");

  return (
    <>
      <Helmet>
        <title>Dúvidas Frequentes | Labclin - Rio Pomba e Região</title>
        <meta 
          name="description" 
          content="Respostas para todas as suas dúvidas sobre exames de sangue, sexagem fetal, toxicológico, jejum e convênios no Labclin. Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia." 
        />
        <meta 
          name="keywords" 
          content="dúvidas laboratório, FAQ exames de sangue, perguntas frequentes labclin, laboratório rio pomba, exames mercês, guarani laboratório, silveirânia exames, jejum exame, sexagem fetal dúvidas, toxicológico CNH" 
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/duvidas-frequentes" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dúvidas Frequentes | Labclin - Laboratório de Análises Clínicas" />
        <meta property="og:description" content="Respostas para todas as suas dúvidas sobre exames de sangue, sexagem fetal, toxicológico, jejum e convênios. Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.labclinmg.com.br/duvidas-frequentes" />
        <meta property="og:image" content="https://www.labclinmg.com.br/images/faq/recepcao-laboratorio-rio-pomba.jpg" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Structured Data - FAQPage Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Header />

      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-hover py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Central de Ajuda Labclin
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                Como podemos ajudar você hoje?
              </p>
              
              {/* Search Input */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar dúvida... (ex: jejum, sexagem, convênio)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-card border-0 shadow-lg rounded-xl"
                  aria-label="Buscar perguntas frequentes"
                />
              </div>
              
              {searchTerm && (
                <p className="mt-4 text-primary-foreground/80">
                  {totalResults} {totalResults === 1 ? "resultado encontrado" : "resultados encontrados"}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Image 1: Prêmio Destaque Empresarial */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <figure className="max-w-4xl mx-auto">
              <img
                src="/images/faq/premio-destaque-empresarial-2024.jpg"
                alt="Equipe Labclin recebendo o Prêmio Destaque Empresarial 2024 em Mercês MG - Reconhecimento pela excelência em análises clínicas na região"
                className="w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-3">
                Labclin recebe Prêmio Destaque Empresarial 2024 em Mercês, MG
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {filteredCategories.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl text-muted-foreground mb-4">
                    Nenhuma pergunta encontrada para "{searchTerm}"
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                  >
                    Limpar busca
                  </Button>
                </div>
              ) : (
                filteredCategories.map((category, categoryIndex) => (
                  <div key={category.id}>
                    {/* Insert Image 2 before "Unidades" section */}
                    {category.id === "unidades" && (
                      <figure className="mb-12">
                        <img
                          src="/images/faq/recepcao-laboratorio-rio-pomba.jpg"
                          alt="Recepção moderna e acolhedora do Laboratório Labclin em Rio Pomba MG - Atendimento humanizado"
                          className="w-full h-auto rounded-2xl shadow-xl"
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption className="text-center text-sm text-muted-foreground mt-3">
                          Recepção do Labclin em Rio Pomba, MG - Ambiente acolhedor para nossos pacientes
                        </figcaption>
                      </figure>
                    )}

                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category.title}
                      </h2>
                    </div>

                    {/* FAQ Accordion */}
                    <Accordion type="multiple" className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={`${category.id}-${faqIndex}`}
                          value={`${category.id}-${faqIndex}`}
                          className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-hover">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-6 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Não encontrou sua resposta?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Nossa equipe está pronta para ajudar você pelo WhatsApp. Resposta rápida garantida!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp: {CONTACTS.WHATSAPP_DISPLAY}
                </a>
                <a
                  href="tel:+553235713712"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted text-foreground font-bold py-4 px-8 rounded-xl shadow-lg transition-all"
                >
                  <Phone className="h-5 w-5" />
                  (32) 3571-3712
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default DuvidasFrequentes;
