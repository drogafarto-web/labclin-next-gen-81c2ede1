import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { logger } from "@/lib/logger";
import { analytics } from "@/lib/analytics";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const CHUNK_ERROR_KEY = 'chunk_error_reloaded';

/**
 * Verifica se é um erro de carregamento de módulo dinâmico
 */
const isChunkLoadError = (error: Error): boolean => {
  const message = error.message?.toLowerCase() || '';
  const name = error.name?.toLowerCase() || '';
  
  return (
    message.includes('failed to fetch dynamically imported module') ||
    message.includes('loading chunk') ||
    message.includes('loading css chunk') ||
    name.includes('chunkloaderror') ||
    message.includes('dynamically imported module')
  );
};

/**
 * Error Boundary para capturar erros de renderização React
 * e exibir UI de fallback amigável
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Verifica se é erro de chunk/módulo dinâmico
    if (isChunkLoadError(error)) {
      const hasReloaded = sessionStorage.getItem(CHUNK_ERROR_KEY);
      
      if (!hasReloaded) {
        // Marca que já tentou recarregar
        sessionStorage.setItem(CHUNK_ERROR_KEY, Date.now().toString());
        
        logger.info("ErrorBoundary: Detectado erro de chunk, recarregando página...", {
          errorMessage: error.message,
        });
        
        // Recarrega a página UMA vez
        window.location.reload();
        return;
      }
      
      // Se já recarregou e ainda deu erro, limpa o flag
      sessionStorage.removeItem(CHUNK_ERROR_KEY);
      
      logger.error("ErrorBoundary: Erro de chunk persistente após reload", error, {
        componentStack: errorInfo.componentStack,
      });
    } else {
      // Log estruturado do erro (não é erro de chunk)
      logger.error("ErrorBoundary capturou erro", error, {
        componentStack: errorInfo.componentStack,
        errorInfo,
      });
    }
    
    // Track no analytics
    analytics.errorOccurred(
      error.message,
      'react_error_boundary',
      true // fatal error
    );
  }

  componentDidMount() {
    // Limpa o flag de reload após carregamento bem-sucedido
    const reloadTime = sessionStorage.getItem(CHUNK_ERROR_KEY);
    if (reloadTime) {
      const timeSinceReload = Date.now() - parseInt(reloadTime, 10);
      // Se passou mais de 5 segundos sem erro, o reload funcionou
      if (timeSinceReload > 5000) {
        sessionStorage.removeItem(CHUNK_ERROR_KEY);
      }
    }
  }

  handleReset = () => {
    sessionStorage.removeItem(CHUNK_ERROR_KEY);
    this.setState({ hasError: false, error: undefined });
    window.location.href = "/";
  };

  handleHardReload = () => {
    sessionStorage.removeItem(CHUNK_ERROR_KEY);
    // Força limpeza de cache e recarrega
    const hasCaches = typeof window !== 'undefined' && 'caches' in window;
    
    if (hasCaches) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          if (name.includes('labclin')) {
            caches.delete(name);
          }
        });
      }).finally(() => {
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      const isChunkError = this.state.error && isChunkLoadError(this.state.error);
      
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {isChunkError ? "Atualizando o site..." : "Ops! Algo deu errado"}
            </h1>
            
            <p className="text-muted-foreground mb-6">
              {isChunkError 
                ? "O site foi atualizado recentemente. Clique no botão abaixo para carregar a nova versão."
                : "Ocorreu um erro inesperado. Não se preocupe, sua segurança e privacidade estão protegidas."
              }
            </p>

            {this.state.error && !isChunkError && (
              <div className="bg-muted/50 rounded p-3 mb-6 text-left">
                <p className="text-xs font-mono text-muted-foreground break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {isChunkError ? (
                <Button
                  onClick={this.handleHardReload}
                  variant="default"
                  size="lg"
                  className="w-full"
                >
                  Atualizar Página
                </Button>
              ) : (
                <>
                  <Button
                    onClick={this.handleReset}
                    variant="default"
                    size="lg"
                    className="w-full"
                  >
                    Voltar para a Página Inicial
                  </Button>
                  
                  <Button
                    onClick={this.handleHardReload}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Recarregar Página
                  </Button>
                </>
              )}
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Se o problema persistir, entre em contato conosco pelo WhatsApp:{" "}
              <a
                href="https://wa.me/5532991990239?text=Estou%20com%20problemas%20no%20site"
                className="text-primary hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                (32) 99199-0239
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
