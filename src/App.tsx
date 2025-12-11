import React, { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { analytics } from "./lib/analytics";

// Eager load the Index page
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Exames = lazy(() => import("./pages/Exames"));
const Agendar = lazy(() => import("./pages/Agendar"));
const Unidades = lazy(() => import("./pages/Unidades"));
const Contato = lazy(() => import("./pages/Contato"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const Resultados = lazy(() => import("./pages/Resultados"));
const ColetaDomiciliar = lazy(() => import("./pages/ColetaDomiciliar"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const HemogramaRioPomba = lazy(() => import("./pages/blog/HemogramaRioPomba"));
const SexagemFetalMerces = lazy(() => import("./pages/blog/SexagemFetalMerces"));
const ColetaDomiciliarGuaraniSilverania = lazy(() => import("./pages/blog/ColetaDomiciliarGuaraniSilverania"));
const HemogramaCompletoGuiaDefinitivo = lazy(() => import("./pages/blog/HemogramaCompletoGuiaDefinitivo"));
const JejumExamesMitosVerdades = lazy(() => import("./pages/blog/JejumExamesMitosVerdades"));
const ColetaDomiciliarAgende = lazy(() => import("./pages/blog/ColetaDomiciliarAgende"));
const SexagemFetalPreco = lazy(() => import("./pages/blog/SexagemFetalPreco"));
const ColetaInfantilSemTraumas = lazy(() => import("./pages/blog/ColetaInfantilSemTraumas"));
const ExameToxicologicoCNH = lazy(() => import("./pages/blog/ExameToxicologicoCNH"));
const TesteGravidezBetaHCG = lazy(() => import("./pages/blog/TesteGravidezBetaHCG"));
const TestePezinhoAmpliado = lazy(() => import("./pages/blog/TestePezinhoAmpliado"));
const UnidadeRioPomba = lazy(() => import("./pages/unidades/UnidadeRioPomba"));
const UnidadeMerces = lazy(() => import("./pages/unidades/UnidadeMerces"));
const UnidadeSilveirania = lazy(() => import("./pages/unidades/UnidadeSilveirania"));
const UnidadeGuarani = lazy(() => import("./pages/unidades/UnidadeGuarani"));
const GenerateImage = lazy(() => import("./pages/admin/GenerateImage"));
const DuvidasFrequentes = lazy(() => import("./pages/DuvidasFrequentes"));
const Bio = lazy(() => import("./pages/Bio"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background" role="status" aria-live="polite">
    <div className="text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
      <p className="text-muted-foreground">Carregando...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;
    const pageTitle = document.title;
    analytics.pageView(pagePath, pageTitle);
  }, [location]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTracker />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/exames" element={<Exames />} />
              <Route path="/agendar" element={<Agendar />} />
              <Route path="/unidades" element={<Unidades />} />
              <Route path="/unidades/rio-pomba" element={<UnidadeRioPomba />} />
              <Route path="/unidades/merces" element={<UnidadeMerces />} />
              <Route path="/unidades/silveirania" element={<UnidadeSilveirania />} />
              <Route path="/unidades/guarani" element={<UnidadeGuarani />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/coleta-domiciliar" element={<ColetaDomiciliar />} />
              <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-de-uso" element={<TermosUso />} />
              <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/hemograma-rio-pomba" element={<HemogramaRioPomba />} />
              <Route path="/blog/sexagem-fetal-merces" element={<SexagemFetalMerces />} />
              <Route path="/blog/coleta-domiciliar-guarani-silverania" element={<ColetaDomiciliarGuaraniSilverania />} />
              <Route path="/blog/hemograma-completo-guia-definitivo" element={<HemogramaCompletoGuiaDefinitivo />} />
              <Route path="/blog/jejum-exames-mitos-e-verdades" element={<JejumExamesMitosVerdades />} />
              <Route path="/blog/coleta-domiciliar-agende" element={<ColetaDomiciliarAgende />} />
              <Route path="/blog/sexagem-fetal-preco" element={<SexagemFetalPreco />} />
              <Route path="/blog/coleta-infantil-sem-traumas" element={<ColetaInfantilSemTraumas />} />
              <Route path="/blog/exame-toxicologico-primeira-habilitacao-preco" element={<ExameToxicologicoCNH />} />
              <Route path="/blog/teste-gravidez-farmacia-ou-sangue-beta-hcg" element={<TesteGravidezBetaHCG />} />
              <Route path="/blog/teste-do-pezinho-ampliado-sus-particular" element={<TestePezinhoAmpliado />} />
              <Route path="/duvidas-frequentes" element={<DuvidasFrequentes />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/admin/generate-image" element={<GenerateImage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
