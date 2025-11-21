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
