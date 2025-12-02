import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ColetaDomiciliarGuaraniSilverania = () => {
  return (
    <>
      <Helmet>
        <title>Coleta Domiciliar: vantagens e como agendar | Labclin Guarani e Silveirânia</title>
        <meta
          name="description"
          content="Descubra as vantagens da coleta domiciliar, em quais situações é indicada e como agendar facilmente online ou WhatsApp. Atendemos Guarani, Silveirânia, Rio Pomba e Mercês."
        />
        <meta
          name="keywords"
          content="coleta domiciliar, exames em casa, laboratório domiciliar, Guarani, Silveirânia, comodidade, idosos, gestantes"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/coleta-domiciliar-guarani-silverania" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Coleta domiciliar: vantagens e como agendar",
            "datePublished": "2025-01-08",
            "author": { "@type": "Organization", "name": "Labclin" }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          <article className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Voltar para o blog
              </Link>

              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Serviços
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      08 Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      4 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Coleta domiciliar: vantagens e como agendar
                </h1>

                <p className="text-xl text-muted-foreground">
                  Descubra as vantagens da coleta domiciliar, em quais situações ela é indicada e 
                  como agendar facilmente online ou pelo WhatsApp.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/coleta-domiciliar-enhanced.jpg"
                  alt="Profissional realizando coleta domiciliar de exames"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>O que é a coleta domiciliar?</h2>
                <p>
                  A coleta domiciliar é um serviço oferecido por laboratórios onde um profissional 
                  qualificado se desloca até a residência, empresa ou local escolhido pelo paciente 
                  para realizar a coleta de exames laboratoriais. Este serviço garante praticidade, 
                  conforto e segurança, especialmente para quem tem dificuldade de locomoção.
                </p>

                <h2>Principais vantagens da coleta domiciliar</h2>
                
                <h3>1. Comodidade e economia de tempo</h3>
                <p>
                  Não é necessário se deslocar até o laboratório, enfrentar trânsito ou filas. 
                  Você escolhe o melhor horário e local para a coleta, otimizando seu tempo.
                </p>

                <h3>2. Segurança e conforto</h3>
                <p>
                  Ideal para idosos, gestantes, crianças pequenas, pessoas com mobilidade reduzida 
                  ou em recuperação. O ambiente familiar proporciona mais tranquilidade durante o procedimento.
                </p>

                <h3>3. Redução de riscos</h3>
                <p>
                  Especialmente importante para pessoas imunossuprimidas ou em situações onde é 
                  recomendado evitar aglomerações e ambientes hospitalares.
                </p>

                <h3>4. Atendimento personalizado</h3>
                <p>
                  O profissional dedica atenção exclusiva ao paciente, podendo esclarecer dúvidas 
                  e garantir que todos os procedimentos sejam realizados adequadamente.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    ✅ Para quem é indicada?
                  </h3>
                  <ul className="text-muted-foreground mb-0 space-y-2">
                    <li>✓ Idosos com dificuldade de locomoção</li>
                    <li>✓ Gestantes, especialmente em estágios avançados</li>
                    <li>✓ Pessoas com mobilidade reduzida ou acamadas</li>
                    <li>✓ Pacientes em recuperação pós-operatória</li>
                    <li>✓ Crianças pequenas e bebês</li>
                    <li>✓ Profissionais com agenda apertada</li>
                    <li>✓ Empresas que desejam realizar exames ocupacionais</li>
                  </ul>
                </div>

                <h2>Quais exames podem ser coletados em casa?</h2>
                <p>
                  A maioria dos exames laboratoriais pode ser realizada através da coleta domiciliar, incluindo:
                </p>
                <ul>
                  <li>Hemograma completo</li>
                  <li>Glicemia e perfil glicêmico</li>
                  <li>Colesterol e triglicerídeos</li>
                  <li>Função renal e hepática</li>
                  <li>Hormônios (tireoide, sexuais, etc.)</li>
                  <li>Sexagem fetal</li>
                  <li>PSA</li>
                  <li>Vitaminas e minerais</li>
                  <li>Urina tipo 1 e urocultura</li>
                </ul>

                <p className="text-muted-foreground italic">
                  Alguns exames específicos podem requerer coleta presencial no laboratório. 
                  Consulte nossa equipe para verificar a disponibilidade.
                </p>

                <h2>Como funciona o agendamento?</h2>
                <p>
                  No Labclin, tornar a coleta domiciliar simples e acessível é nossa prioridade. 
                  Você pode agendar de três formas:
                </p>

                <h3>1. WhatsApp (forma mais rápida)</h3>
                <p>
                  Envie uma mensagem para nosso WhatsApp informando:
                </p>
                <ul>
                  <li>Nome completo</li>
                  <li>Exames solicitados (envie foto do pedido médico)</li>
                  <li>Endereço completo</li>
                  <li>Data e horário preferencial</li>
                </ul>

                <h3>2. Site</h3>
                <p>
                  Acesse nossa página de <Link to="/coleta-domiciliar" className="text-primary hover:underline">coleta domiciliar</Link> e 
                  preencha o formulário de agendamento.
                </p>

                <h3>3. Telefone</h3>
                <p>
                  Ligue para nossa central de atendimento e agende diretamente com nossa equipe.
                </p>

                <h2>Preparação para a coleta domiciliar</h2>
                <p>O preparo é o mesmo da coleta presencial:</p>
                <ul>
                  <li>Siga as orientações de jejum conforme o pedido médico</li>
                  <li>Tenha em mãos o pedido médico original</li>
                  <li>Mantenha-se hidratado (se permitido)</li>
                  <li>Separe documentos (RG, CPF, carteirinha do convênio)</li>
                  <li>Prepare um local tranquilo e bem iluminado para a coleta</li>
                </ul>

                <h2>Áreas de atendimento</h2>
                <p>
                  A coleta domiciliar do Labclin atende as cidades de:
                </p>
                <ul>
                  <li><strong>Rio Pomba</strong> e zona rural</li>
                  <li><strong>Mercês</strong> e distritos</li>
                  <li><strong>Guarani</strong> e arredores</li>
                  <li><strong>Silveirânia</strong> e região</li>
                </ul>

                <p className="text-muted-foreground italic">
                  Para outras localidades, consulte nossa equipe sobre disponibilidade e condições.
                </p>

                <h2>Investimento e formas de pagamento</h2>
                <p>
                  O valor da coleta domiciliar varia de acordo com a localização e quantidade de exames. 
                  Aceitamos diversas formas de pagamento, incluindo dinheiro, cartões de crédito/débito 
                  e PIX. Consulte valores e condições no momento do agendamento.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Precisa de coleta domiciliar?
                    </h3>
                    <p className="text-muted-foreground">
                      Agende agora em Guarani, Silveirânia, Rio Pomba ou Mercês
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/coleta-domiciliar">
                      <Button className="bg-gradient-hero">
                        Agendar Coleta
                      </Button>
                    </Link>
                    <a 
                      href="https://wa.me/5531987654321?text=Olá! Gostaria de agendar uma coleta domiciliar."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ColetaDomiciliarGuaraniSilverania;