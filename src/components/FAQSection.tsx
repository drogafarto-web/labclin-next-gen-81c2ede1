import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { generateFAQSchema } from "@/lib/structuredData";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Como posso agendar meus exames no Labclin?",
      answer: "Você pode agendar seus exames de três formas: pelo WhatsApp (32) 99199-0239, ligando para (32) 3571-1599, ou visitando uma de nossas unidades. O agendamento é rápido e simples!"
    },
    {
      question: "O Labclin aceita convênios médicos?",
      answer: "Sim! Trabalhamos com diversos convênios médicos. Entre em contato conosco para verificar se seu convênio está na nossa lista de parceiros."
    },
    {
      question: "Em quanto tempo ficam prontos os resultados dos exames?",
      answer: "O prazo varia conforme o tipo de exame. Exames de rotina geralmente ficam prontos em 24 a 48 horas. Exames especializados podem levar de 3 a 7 dias. Você pode consultar seus resultados online através do nosso site."
    },
    {
      question: "Como acesso meus resultados de exames online?",
      answer: "Acesse a seção 'Resultados' no nosso site, digite sua chave de acesso (fornecida no momento da coleta) e sua senha (geralmente sua data de nascimento). Seus resultados estarão disponíveis de forma segura."
    },
    {
      question: "Preciso de jejum para fazer exames de sangue?",
      answer: "Depende do tipo de exame. Para hemograma completo geralmente não é necessário jejum. Para glicemia e perfil lipídico (colesterol), recomenda-se jejum de 8 a 12 horas. Sempre confirme com seu médico ou entre em contato conosco."
    },
    {
      question: "O Labclin faz coleta domiciliar?",
      answer: "Sim! Oferecemos serviço de coleta domiciliar para sua comodidade e segurança. Ideal para idosos, crianças e pessoas com dificuldade de locomoção. Agende pelo WhatsApp (32) 99199-0239."
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer: "Nossa unidade principal em Rio Pomba funciona de segunda a sexta das 6:30 às 17:30 e aos sábados das 7:00 às 11:00. As outras unidades têm horários específicos. Consulte a página 'Unidades' para mais detalhes."
    },
    {
      question: "É necessário apresentar pedido médico para fazer exames?",
      answer: "Sim, para a realização de exames laboratoriais é necessário apresentar o pedido médico com a solicitação dos exames. Isso garante que os exames corretos sejam realizados conforme orientação do seu médico."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Gera o schema estruturado para SEO
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="faq-heading">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre agendamento, convênios e resultados de exames
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden transition-all hover:shadow-medium"
                role="listitem"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="px-6 pb-6">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-6 bg-primary/5 border-2 border-primary/20 rounded-lg">
            <p className="text-lg text-foreground mb-4">
              <strong>Não encontrou sua resposta?</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Entre em contato conosco pelo WhatsApp ou telefone
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5532991990239?text=Olá!%20Gostaria%20de%20informações"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-hover transition-colors"
              >
                WhatsApp: (32) 99199-0239
              </a>
              <a
                href="tel:+553235711599"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary-hover transition-colors"
              >
                Telefone: (32) 3571-1599
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
