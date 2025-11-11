import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import { initWebVitals, initLongTaskMonitoring } from "./lib/analytics";

// Inicializa Web Vitals e Long Task monitoring
if (import.meta.env.PROD) {
  initWebVitals();
  initLongTaskMonitoring();
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
