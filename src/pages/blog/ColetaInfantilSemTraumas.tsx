import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ColetaInfantilSemTraumas = () => {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Coleta Infantil Humanizada: Como o Labclin transforma o medo de agulha em brincadeira",
    "description": "Conheça o Espaço Kids e a técnica Mãozinha Leve para coletas infantis sem trauma em Rio Pomba, Mercês, Guarani e Silveirânia.",
    "image": "https://www.labclinmg.com.br/images/blog/espaco-kids-labclin-rio-pomba.jpg",
    "datePublished": "2024-12-07",
    "dateModified": "2024-12-07",
    "author": {
      "@type": "Organization",
      "name": "Labclin",
      "url": "https://www.labclinmg.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Labclin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.labclinmg.com.br/labclin-logo.png"
      }
    },
    "about": {
      "@type": "MedicalProcedure",
      "name": "Coleta de Sangue Pediátrica",
      "procedureType": "Percutaneous"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.labclinmg.com.br/blog/coleta-infantil-sem-traumas"
    }
  };

  const unidades = [
    { nome: "Rio Pomba", destaque: "Matriz (Com Espaço Kids completo)", link: "/unidades/rio-pomba" },
    { nome: "Mercês", destaque: "Coleta humanizada no Centro", link: "/unidades/merces" },
    { nome: "Guarani", destaque: "Atendimento especializado no Bairro Sossego", link: "/unidades/guarani" },
    { nome: "Silveirânia", destaque: "Nova unidade com equipe treinada", link: "/unidades/silveirania" },
  ];

  return (
    <>
      <SEO
        title="Coleta Infantil e Espaço Kids em Rio Pomba | Labclin"
        description="Seu filho tem medo de exames? Conheça o Espaço Kids do Labclin e a equipe Mãozinha Leve. Teste do Pezinho e exames sem trauma em Rio Pomba, Mercês e região."
        keywords="coleta infantil, espaço kids laboratório, teste do pezinho Rio Pomba, exame de sangue criança, coleta pediátrica, laboratório infantil Mercês, Guarani, Silveirânia"
        canonicalUrl="https://www.labclinmg.com.br/blog/coleta-infantil-sem-traumas"
        ogType="article"
        structuredData={blogPostSchema}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main id="main-content" className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-hero text-primary-foreground py-16 px-4">
            <div className="container mx-auto max-w-3xl">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o Blog
              </Link>
              
              <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                Atendimento Infantil
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Coleta Infantil Humanizada: Como o Labclin transforma o medo de agulha em brincadeira
              </h1>
              
              <p className="text-primary-foreground/90 text-sm md:text-base">
                Por Equipe Labclin • Leitura de 4 min
              </p>
            </div>
          </section>

          {/* Article Content */}
          <article className="py-12 px-4">
            <div className="container mx-auto max-w-3xl">
              
              {/* Lead Paragraph */}
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-10 border-l-4 border-primary pl-6">
                O choro e o trauma ficaram no passado. Conheça o Espaço Kids e a técnica "Mãozinha Leve" que tranquiliza pais e filhos em Rio Pomba e região.
              </p>

              {/* Key Takeaways Card */}
              <Card className="mb-10 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-primary mb-3">📌 Resumo do Artigo</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Técnica "Mãozinha Leve" com agulhas pediátricas especiais</li>
                    <li>✓ Espaço Kids com brinquedos e ambiente acolhedor</li>
                    <li>✓ Certificado de Coragem para os pequenos</li>
                    <li>✓ Disponível em 4 unidades na região</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Sabemos que o coração aperta quando o médico pede um exame de sangue para o seu filho. O medo da dor, o choro e a ansiedade são normais, mas você sabia que a coleta não precisa ser um momento traumático? No Labclin, criamos um protocolo exclusivo de atendimento pediátrico.
                </p>

                {/* Image 1 - Espaço Kids */}
                <figure className="my-10">
                  <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
                    <OptimizedImage
                      src="/images/blog/espaco-kids-labclin-rio-pomba.jpg"
                      alt="Espaço Kids do Laboratório Labclin em Rio Pomba MG - Ambiente colorido para coleta infantil"
                      className="w-full h-full"
                      imgClassName="object-cover object-[50%_40%]"
                      showSkeleton={true}
                    />
                  </div>
                  <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    Nosso cantinho especial preparado para distrair e acolher os pequenos.
                  </figcaption>
                </figure>

                {/* Section: Mãozinha Leve */}
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
                  O Segredo da "Mãozinha Leve"
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Mais do que brinquedos, o segredo está na técnica. Nossa equipe de enfermagem e biomedicina passa por treinamentos constantes para coletas em veias difíceis, recém-nascidos (Teste do Pezinho) e crianças ansiosas. Usamos agulhas especiais (calibre pediátrico) e uma abordagem lúdica que transforma a "picadinha" em um ato de coragem.
                </p>

                {/* Section: Ambiente Acolhedor */}
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
                  Um Ambiente que Acolhe
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Esqueça aquele ambiente frio de hospital. Nosso Espaço Kids foi desenhado para parecer uma brinquedoteca. Enquanto a criança se diverte com os desenhos e brinquedos, o exame é feito muitas vezes sem que ela nem perceba o momento exato da coleta.
                </p>

                {/* Image 2 - Brinquedoteca */}
                <figure className="my-10">
                  <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
                    <OptimizedImage
                      src="/images/blog/brinquedoteca-coleta-infantil-labclin.png"
                      alt="Brinquedos e certificado de coragem no laboratório infantil Labclin"
                      className="w-full h-full"
                      imgClassName="object-cover object-[50%_37%]"
                      showSkeleton={true}
                    />
                  </div>
                  <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    Ambiente lúdico com brinquedos que distraem e acalmam as crianças.
                  </figcaption>
                </figure>

                {/* Section: Certificado de Coragem */}
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
                  O Certificado de Coragem
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ao final, toda criança sai com seu "Certificado de Coragem", transformando uma experiência que seria assustadora em uma conquista orgulhosa para mostrar aos avós e amiguinhos.
                </p>

                {/* Section: Unidades */}
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
                  Onde encontrar atendimento infantil?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O atendimento especializado para crianças e o Teste do Pezinho estão disponíveis em nossa rede integrada:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {unidades.map((unidade) => (
                    <Link
                      key={unidade.nome}
                      to={unidade.link}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                    >
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {unidade.nome}:
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {unidade.destaque}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-teal-50 dark:bg-primary/10 border border-teal-200 dark:border-primary/30 rounded-xl p-8 mt-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Precisa fazer Teste do Pezinho ou Check-up no seu filho?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Agende agora pelo WhatsApp e garanta um atendimento humanizado para o seu pequeno.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8"
                >
                  <a
                    href="https://wa.me/5532991990239?text=Olá,%20gostaria%20de%20saber%20sobre%20coleta%20infantil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Ver mais artigos no Blog
                </Link>
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

export default ColetaInfantilSemTraumas;
