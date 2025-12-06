import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "sexagem-fetal-preco",
      title: "Sexagem Fetal por R$ 140,00 em Rio Pomba e Região",
      excerpt: "Descubra o sexo do bebê a partir da 8ª semana por apenas R$ 140,00. Sem jejum, sem pedido médico. Disponível em Rio Pomba, Mercês, Guarani e Silveirânia.",
      image: "/images/blog/sexagem-fetal-gestante.webp",
      category: "Gestante",
      readTime: "5 min",
      publishDate: "05 Fev 2025",
      featured: true,
    },
    {
      slug: "coleta-domiciliar-agende",
      title: "Coleta Domiciliar de Exames: Agende com Conforto e Segurança",
      excerpt: "A coleta domiciliar é a opção ideal para quem busca conforto e segurança. Agende agora mesmo a coleta de exames no Labclin, no horário e local de sua preferência.",
      image: "/images/blog/coleta-domiciliar-enhanced.jpg",
      category: "Serviços de Conveniência",
      readTime: "4 min",
      publishDate: "24 Jan 2025",
    },
    {
      slug: "jejum-exames-mitos-e-verdades",
      title: "Jejum para Exames: 5 Mitos e Verdades que Você Precisa Saber",
      excerpt: "Você sabia que nem todos os exames exigem jejum? Vamos esclarecer as dúvidas mais comuns sobre o preparo para exames e ajudar você a se preparar corretamente.",
      image: "/images/blog/preparo-exames-enhanced.jpg",
      category: "Preparação para Exames",
      readTime: "5 min",
      publishDate: "22 Jan 2025",
    },
    {
      slug: "hemograma-completo-guia-definitivo",
      title: "Hemograma Completo: O Guia Definitivo para Entender Seu Exame de Sangue",
      excerpt: "O hemograma completo é um dos exames mais solicitados, ajudando a detectar condições como anemia e infecções. Neste guia, explicamos como ele funciona e o que você pode esperar.",
      image: "/images/blog/hemograma-enhanced.jpg",
      category: "Exames de Rotina",
      readTime: "6 min",
      publishDate: "20 Jan 2025",
    },
    {
      slug: "hemograma-rio-pomba",
      title: "O que é um hemograma e quando pedir?",
      excerpt: "Entenda como funciona o exame de sangue mais comum, quando ele é indicado e por que o hemograma é importante no diagnóstico de várias doenças.",
      image: "/images/blog/hemograma-enhanced.jpg",
      category: "Exames",
      readTime: "5 min",
      publishDate: "15 Jan 2025",
    },
    {
      slug: "sexagem-fetal-merces",
      title: "Chá de Revelação: Sexagem Fetal confiável?",
      excerpt: "Saiba como funciona a sexagem fetal, quais os critérios de confiança e como realizar o teste de forma ética e segura para um chá de revelação inesquecível!",
      image: "/images/blog/preparo-exames-enhanced.jpg",
      category: "Gestante",
      readTime: "4 min",
      publishDate: "11 Jan 2025",
    },
    {
      slug: "coleta-domiciliar-guarani-silverania",
      title: "Coleta domiciliar: vantagens e como agendar",
      excerpt: "Descubra as vantagens da coleta domiciliar, em quais situações ela é indicada e como agendar facilmente online ou pelo WhatsApp.",
      image: "/images/blog/coleta-domiciliar-enhanced.jpg",
      category: "Serviços",
      readTime: "4 min",
      publishDate: "08 Jan 2025",
    },
    {
      slug: "preparo-exames-laboratoriais",
      title: "Como se preparar corretamente para exames laboratoriais",
      excerpt: "Guia completo sobre jejum, hidratação e cuidados necessários antes de realizar seus exames. Evite resultados incorretos com as orientações certas.",
      image: "/images/blog/preparo-exames-enhanced.jpg",
      category: "Dicas",
      readTime: "6 min",
      publishDate: "05 Jan 2025",
    },
    {
      slug: "exames-preventivos-saude",
      title: "Exames preventivos: quais fazer anualmente?",
      excerpt: "Conheça os principais exames de rotina recomendados por faixa etária e como eles podem ajudar na detecção precoce de doenças.",
      image: "/images/blog/hemograma-enhanced.jpg",
      category: "Saúde Preventiva",
      readTime: "7 min",
      publishDate: "02 Jan 2025",
    },
    {
      slug: "resultados-online-labclin",
      title: "Acesso rápido e seguro aos resultados online",
      excerpt: "Saiba como consultar seus resultados de exames de forma prática, segura e rápida através da nossa plataforma online.",
      image: "/images/blog/coleta-domiciliar-enhanced.jpg",
      category: "Tecnologia",
      readTime: "3 min",
      publishDate: "28 Dez 2024",
    },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog da Saúde Labclin",
    "description": "Novidades e dicas sobre exames laboratoriais e saúde",
    "publisher": {
      "@type": "Organization",
      "name": "Labclin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.labclinmg.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.labclinmg.com.br/blog"
    }
  };

  return (
    <>
      <SEO
        title="Blog da Saúde"
        description="Fique por dentro das novidades, dicas e informações sobre exames laboratoriais, saúde e bem-estar em Rio Pomba, Mercês, Guarani e Silveirânia."
        keywords="exames laboratoriais, laboratório Rio Pomba, hemograma, sexagem fetal, coleta domiciliar, resultados online, saúde preventiva"
        canonicalUrl="https://www.labclinmg.com.br/blog"
        ogType="website"
        structuredData={blogSchema}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main id="main-content" className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-hero text-primary-foreground py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para página inicial
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Blog da Saúde Labclin
              </h1>
              <p className="text-lg md:text-xl opacity-95 max-w-3xl">
                Fique por dentro das novidades, dicas e informações sobre exames laboratoriais, 
                saúde e bem-estar em Rio Pomba, Mercês, Guarani e Silveirânia!
              </p>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.slug}
                    className={post.featured ? "lg:col-span-2 lg:row-span-1" : ""}
                  >
                    <BlogCard {...post} />
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 bg-gradient-subtle rounded-lg p-8 md:p-12 text-center border border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Precisa realizar exames?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Agende agora pelo WhatsApp seus exames laboratoriais com praticidade ou solicite nossa coleta domiciliar. 
                  Atendemos Rio Pomba, Mercês, Guarani e Silveirânia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/agendar"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-hero text-primary-foreground rounded-lg font-semibold hover:shadow-medium transition-all"
                  >
                    Agendar Exame
                  </Link>
                  <Link
                    to="/coleta-domiciliar"
                    className="inline-flex items-center justify-center px-6 py-3 bg-card border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Coleta Domiciliar
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;