import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="text-center px-4" role="main" aria-labelledby="error-title">
        <h1 id="error-title" className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Página não encontrada</p>
        <a 
          href="/" 
          className="text-primary underline hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          aria-label="Voltar para página inicial"
        >
          Voltar para Início
        </a>
      </main>
    </div>
  );
};

export default NotFound;
