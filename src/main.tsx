import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import { initWebVitals, initLongTaskMonitoring } from "./lib/analytics";

const CHUNK_ERROR_KEY = 'chunk_error_reloaded';

// Handler global para erros de módulo dinâmico fora do React
const handleChunkError = (message: string) => {
  const isChunkError = 
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('Loading chunk') ||
    message.includes('Loading CSS chunk') ||
    message.includes('dynamically imported module');
  
  if (isChunkError) {
    const hasReloaded = sessionStorage.getItem(CHUNK_ERROR_KEY);
    
    if (!hasReloaded) {
      console.log('[App] Erro de chunk detectado, recarregando...');
      sessionStorage.setItem(CHUNK_ERROR_KEY, Date.now().toString());
      window.location.reload();
      return true;
    }
  }
  return false;
};

// Listener global para erros
window.addEventListener('error', (event) => {
  if (event.message) {
    handleChunkError(event.message);
  }
});

// Listener para rejeições de Promise não tratadas (módulos dinâmicos usam isso)
window.addEventListener('unhandledrejection', (event) => {
  const message = event.reason?.message || String(event.reason);
  if (handleChunkError(message)) {
    event.preventDefault();
  }
});

// Limpa flag de reload após 10 segundos de sucesso
setTimeout(() => {
  sessionStorage.removeItem(CHUNK_ERROR_KEY);
}, 10000);

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

// Inicializa Web Vitals e Long Task monitoring APÓS o render inicial
if (import.meta.env.PROD) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initWebVitals();
      initLongTaskMonitoring();
    });
  } else {
    setTimeout(() => {
      initWebVitals();
      initLongTaskMonitoring();
    }, 1000);
  }
}

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('[SW] Registrado com sucesso:', registration.scope);
        
        // Verificar atualizações periodicamente
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // A cada hora
      })
      .catch((error) => {
        console.log('[SW] Falha no registro:', error);
      });
  });
}
