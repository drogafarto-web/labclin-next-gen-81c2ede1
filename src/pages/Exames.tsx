import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Exames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "rotina", label: "Rotina" },
    { id: "especializado", label: "Especializados" },
    { id: "imagem", label: "Imagem" },
  ];

  const exames = [
    {
      slug: "hemograma-completo",
      name: "Hemograma Completo",
      category: "rotina",
      description: "Avaliação completa das células sanguíneas",
      preparo: "Jejum de 4 horas",
      tempo: "24 horas",
    },
    {
      slug: "glicemia-jejum",
      name: "Glicemia de Jejum",
      category: "rotina",
      description: "Medição dos níveis de açúcar no sangue",
      preparo: "Jejum de 8 horas",
      tempo: "24 horas",
    },
    {
      slug: "colesterol-total-fracoes",
      name: "Colesterol Total e Frações",
      category: "rotina",
      description: "Análise completa do perfil lipídico",
      preparo: "Jejum de 12 horas",
      tempo: "24 horas",
    },
    {
      slug: "tsh-t4-livre",
      name: "TSH e T4 Livre",
      category: "especializado",
      description: "Avaliação da função da tireoide",
      preparo: "Não requer jejum",
      tempo: "48 horas",
    },
    {
      slug: "vhs",
      name: "VHS (Velocidade de Hemossedimentação)",
      category: "especializado",
      description: "Detecção de processos inflamatórios",
      preparo: "Não requer jejum",
      tempo: "24 horas",
    },
    {
      slug: "teste-falcizacao",
      name: "Teste de Falcização",
      category: "especializado",
      description: "Identificação de anemia falciforme",
      preparo: "Não requer jejum",
      tempo: "24 horas",
    },
  ];

  const filteredExames = exames.filter((exame) => {
    const matchesSearch = exame.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || exame.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nossos Exames
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Ampla variedade de exames laboratoriais com resultados rápidos e precisos
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar exame..."
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
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

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Não encontrou o exame que procura?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato conosco para mais informações
            </p>
            <Link to="/contato">
              <Button variant="hero" size="lg">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Exames;
