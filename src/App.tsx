import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Exames from "./pages/Exames";
import Agendar from "./pages/Agendar";
import Unidades from "./pages/Unidades";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Resultados from "./pages/Resultados";
import ColetaDomiciliar from "./pages/ColetaDomiciliar";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import HemogramaRioPomba from "./pages/blog/HemogramaRioPomba";
import SexagemFetalMerces from "./pages/blog/SexagemFetalMerces";
import ColetaDomiciliarGuaraniSilverania from "./pages/blog/ColetaDomiciliarGuaraniSilverania";
import HemogramaCompletoGuiaDefinitivo from "./pages/blog/HemogramaCompletoGuiaDefinitivo";
import JejumExamesMitosVerdades from "./pages/blog/JejumExamesMitosVerdades";
import ColetaDomiciliarAgende from "./pages/blog/ColetaDomiciliarAgende";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
