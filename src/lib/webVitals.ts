/**
 * Core Web Vitals monitoring
 * Coleta métricas LCP, FID, CLS, TTFB, FCP, INP
 */

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

export type WebVitalMetric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
};

type ReportHandler = (metric: WebVitalMetric) => void;

const formatMetric = (metric: Metric): WebVitalMetric => ({
  name: metric.name,
  value: metric.value,
  rating: metric.rating,
  delta: metric.delta,
  id: metric.id,
});

/**
 * Inicializa coleta de Web Vitals
 */
export const initWebVitals = (onReport: ReportHandler): void => {
  // Largest Contentful Paint - Tempo de renderização do maior elemento visível
  onLCP((metric) => onReport(formatMetric(metric)));
  
  // Cumulative Layout Shift - Estabilidade visual da página
  onCLS((metric) => onReport(formatMetric(metric)));
  
  // First Contentful Paint - Primeiro conteúdo renderizado
  onFCP((metric) => onReport(formatMetric(metric)));
  
  // Interaction to Next Paint - Responsividade de interações
  onINP((metric) => onReport(formatMetric(metric)));
  
  // Time to First Byte - Tempo de resposta do servidor
  onTTFB((metric) => onReport(formatMetric(metric)));
};

/**
 * Envia métricas para analytics
 */
export const sendToAnalytics = (metric: WebVitalMetric): void => {
  // Envia para Google Analytics se disponível
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
};

/**
 * Log métricas no console (modo dev)
 */
export const logMetricToConsole = (metric: WebVitalMetric): void => {
  const colors = {
    good: '#0CCE6B',
    'needs-improvement': '#FFA400',
    poor: '#FF4E42',
  };

  console.log(
    `%c[Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`,
    `color: ${colors[metric.rating]}; font-weight: bold;`
  );
};

/**
 * Thresholds para classificação de métricas
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FCP: { good: 1800, poor: 3000 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
} as const;
