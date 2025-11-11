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
    // Log estruturado do erro
    logger.error("ErrorBoundary capturou erro", error, {
      componentStack: errorInfo.componentStack,
      errorInfo,
    });
    
    // Track no analytics
    analytics.errorOccurred(
      error.message,
      'react_error_boundary',
      true // fatal error
    );
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    // Recarrega a página para tentar recuperar
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Ops! Algo deu errado
            </h1>
            
            <p className="text-muted-foreground mb-6">
              Ocorreu um erro inesperado. Não se preocupe, sua segurança e privacidade estão protegidas.
            </p>

            {this.state.error && (
              <div className="bg-muted/50 rounded p-3 mb-6 text-left">
                <p className="text-xs font-mono text-muted-foreground break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <Button
                onClick={this.handleReset}
                variant="default"
                size="lg"
                className="w-full"
              >
                Voltar para a Página Inicial
              </Button>
              
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Recarregar Página
              </Button>
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
