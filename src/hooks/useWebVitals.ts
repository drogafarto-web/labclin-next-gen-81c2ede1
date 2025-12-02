/**
 * Hook para monitoramento de Web Vitals
 */

import { useEffect, useState } from 'react';
import { 
  initWebVitals, 
  sendToAnalytics, 
  logMetricToConsole,
  type WebVitalMetric 
} from '@/lib/webVitals';

interface UseWebVitalsOptions {
  enableAnalytics?: boolean;
  enableConsoleLog?: boolean;
}

interface WebVitalsState {
  LCP: WebVitalMetric | null;
  CLS: WebVitalMetric | null;
  FCP: WebVitalMetric | null;
  INP: WebVitalMetric | null;
  TTFB: WebVitalMetric | null;
}

export const useWebVitals = (options: UseWebVitalsOptions = {}) => {
  const { 
    enableAnalytics = import.meta.env.PROD,
    enableConsoleLog = import.meta.env.DEV 
  } = options;

  const [metrics, setMetrics] = useState<WebVitalsState>({
    LCP: null,
    CLS: null,
    FCP: null,
    INP: null,
    TTFB: null,
  });

  useEffect(() => {
    const handleMetric = (metric: WebVitalMetric) => {
      // Atualiza estado
      setMetrics((prev) => ({
        ...prev,
        [metric.name]: metric,
      }));

      // Log no console em dev
      if (enableConsoleLog) {
        logMetricToConsole(metric);
      }

      // Envia para analytics em prod
      if (enableAnalytics) {
        sendToAnalytics(metric);
      }
    };

    initWebVitals(handleMetric);
  }, [enableAnalytics, enableConsoleLog]);

  return metrics;
};

export default useWebVitals;
