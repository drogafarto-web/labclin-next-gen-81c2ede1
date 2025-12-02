import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import { initWebVitals, initLongTaskMonitoring } from "./lib/analytics";

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
