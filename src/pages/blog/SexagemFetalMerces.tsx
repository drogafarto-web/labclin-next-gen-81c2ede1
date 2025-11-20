import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import preparoImage from "@/assets/blog/preparo-exames-enhanced.jpg";

const SexagemFetalMerces = () => {
  return (
    <>
      <Helmet>
        <title>Chá de Revelação: Sexagem Fetal confiável? | Labclin Mercês</title>
        <meta
          name="description"
          content="Saiba como funciona a sexagem fetal, critérios de confiança e como realizar o teste com segurança para um chá de revelação inesquecível. Labclin Mercês, Rio Pomba e região."
        />
        <meta
          name="keywords"
          content="sexagem fetal, chá de revelação, exame sexo bebê, gestante, Mercês, laboratório, gravidez, DNA fetal"
        />
        <link rel="canonical" href="https://labclin.com.br/blog/sexagem-fetal-merces" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Chá de Revelação: Sexagem Fetal confiável?",
            "datePublished": "2025-01-11",
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
                    Gestante
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      11 Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      4 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Chá de Revelação: Sexagem Fetal confiável?
                </h1>

                <p className="text-xl text-muted-foreground">
                  Saiba como funciona a sexagem fetal, quais os critérios de confiança e como realizar 
                  o teste de forma ética e segura para um chá de revelação inesquecível!
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src={preparoImage}
                  alt="Exame de sexagem fetal para chá de revelação"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>O que é a sexagem fetal?</h2>
                <p>
                  A sexagem fetal é um exame não invasivo que identifica o sexo do bebê através da análise 
                  do DNA fetal presente no sangue materno. Este teste pode ser realizado a partir da 8ª semana 
                  de gestação e possui alta taxa de precisão quando executado corretamente.
                </p>

                <h2>Como funciona o exame?</h2>
                <p>
                  Durante a gravidez, pequenas quantidades de DNA do bebê circulam na corrente sanguínea da mãe. 
                  O exame de sexagem fetal detecta a presença ou ausência do cromossomo Y:
                </p>
                <ul>
                  <li><strong>Presença do cromossomo Y:</strong> indica que o bebê é do sexo masculino</li>
                  <li><strong>Ausência do cromossomo Y:</strong> indica que o bebê é do sexo feminino</li>
                </ul>

                <h2>Quando fazer a sexagem fetal?</h2>
                <p>
                  O exame pode ser realizado a partir da <strong>8ª semana de gestação</strong>, contudo, 
                  recomenda-se aguardar até a 10ª semana para maior confiabilidade dos resultados. 
                  Quanto mais avançada a gestação, maior a concentração de DNA fetal no sangue materno.
                </p>

                <h2>Critérios de confiabilidade</h2>
                <p>Para garantir a precisão do exame, é importante considerar:</p>
                <ul>
                  <li>Idade gestacional adequada (mínimo 8 semanas, ideal 10 semanas)</li>
                  <li>Laboratório certificado e com metodologia validada</li>
                  <li>Qualidade na coleta e processamento da amostra</li>
                  <li>Histórico de gestações e características individuais da gestante</li>
                </ul>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    ⚠️ Importante Saber
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    Gestações gemelares, uso de medicamentos específicos e características individuais 
                    podem influenciar o resultado. Sempre informe seu médico e o laboratório sobre 
                    qualquer particularidade da sua gestação.
                  </p>
                </div>

                <h2>Sexagem fetal para chá de revelação</h2>
                <p>
                  O chá de revelação tornou-se um momento especial para os futuros pais compartilharem 
                  a descoberta do sexo do bebê com familiares e amigos. Para que este momento seja 
                  perfeito e sem surpresas indesejadas:
                </p>
                <ul>
                  <li>Realize o exame com antecedência adequada</li>
                  <li>Escolha um laboratório de confiança</li>
                  <li>Solicite o resultado lacrado, se desejar surpresa</li>
                  <li>Confirme o resultado com ultrassom morfológico posteriormente</li>
                </ul>

                <h2>Por que escolher o Labclin?</h2>
                <p>
                  No Labclin, oferecemos o exame de sexagem fetal com toda a segurança e confiabilidade 
                  que este momento especial merece:
                </p>
                <ul>
                  <li>Metodologia validada e precisão superior a 99%</li>
                  <li>Resultado em até 7 dias úteis</li>
                  <li>Opção de resultado lacrado para surpresa</li>
                  <li>Atendimento humanizado e especializado</li>
                  <li>Coleta domiciliar disponível para gestantes</li>
                </ul>

                <h2>Considerações finais</h2>
                <p>
                  A sexagem fetal é um exame seguro, não invasivo e altamente confiável quando realizado 
                  nas condições adequadas. Sempre converse com seu obstetra antes de realizar o exame 
                  e escolha um laboratório de confiança para garantir a precisão dos resultados.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Quer fazer a sexagem fetal?
                    </h3>
                    <p className="text-muted-foreground">
                      Agende no Labclin Mercês ou solicite coleta domiciliar
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/agendar">
                      <Button className="bg-gradient-hero">
                        Agendar Exame
                      </Button>
                    </Link>
                    <Link to="/coleta-domiciliar">
                      <Button variant="outline">
                        Coleta em Casa
                      </Button>
                    </Link>
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

export default SexagemFetalMerces;