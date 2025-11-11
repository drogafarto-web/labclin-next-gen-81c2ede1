import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eager load the Index page
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Exames = lazy(() => import("./pages/Exames"));
const Agendar = lazy(() => import("./pages/Agendar"));
const Unidades = lazy(() => import("./pages/Unidades"));
const Contato = lazy(() => import("./pages/Contato"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/coleta-domiciliar" element={<ColetaDomiciliar />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/hemograma-rio-pomba" element={<HemogramaRioPomba />} />
            <Route path="/blog/sexagem-fetal-merces" element={<SexagemFetalMerces />} />
            <Route path="/blog/coleta-domiciliar-guarani-silverania" element={<ColetaDomiciliarGuaraniSilverania />} />
            <Route path="/blog/hemograma-completo-guia-definitivo" element={<HemogramaCompletoGuiaDefinitivo />} />
            <Route path="/blog/jejum-exames-mitos-e-verdades" element={<JejumExamesMitosVerdades />} />
            <Route path="/blog/coleta-domiciliar-agende" element={<ColetaDomiciliarAgende />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
