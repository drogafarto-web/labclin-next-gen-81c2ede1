/**
 * Analytics wrapper para Google Analytics 4
 * Centraliza tracking de eventos e pageviews
 */

import { logger } from './logger';

// Extend Window interface para gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

class Analytics {
  private isEnabled: boolean;
  private trackingId: string | undefined;

  constructor() {
    this.trackingId = import.meta.env.VITE_GA_TRACKING_ID;
    this.isEnabled = !!this.trackingId && import.meta.env.PROD;

    if (this.isEnabled) {
      this.initializeGA();
    }
  }

  private initializeGA() {
    // Inicializa dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function
    window.gtag = function() {
      window.dataLayer?.push(arguments);
    };

    // Carrega GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    document.head.appendChild(script);

    // Configura GA4
    const now = new Date();
    window.gtag?.('js', now.toISOString());
    window.gtag?.('config', this.trackingId!, {
      send_page_view: false, // Controlaremos manualmente
    });

    logger.info('Google Analytics initialized', { trackingId: this.trackingId });
  }

  public sendEvent(eventName: string, eventParams?: Record<string, any>) {
    if (!this.isEnabled) {
      logger.debug('Analytics event (not sent - disabled)', {
        eventName,
        eventParams,
      });
      return;
    }

    try {
      window.gtag?.('event', eventName, eventParams);
      logger.debug('Analytics event sent', { eventName, eventParams });
    } catch (error) {
      logger.error('Failed to send analytics event', error as Error, {
        eventName,
        eventParams,
      });
    }
  }

  // Pageview tracking
  pageView(pagePath: string, pageTitle: string) {
    this.sendEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
    });

    logger.pageView(pageTitle);
  }

  // Form events
  formStart(formName: string) {
    this.sendEvent('form_start', {
      form_name: formName,
    });
  }

  formSubmit(formName: string, success: boolean, method: 'whatsapp' | 'email' = 'whatsapp') {
    this.sendEvent('form_submit', {
      form_name: formName,
      success,
      method,
    });

    logger.formSubmit(formName, success, { method });
  }

  formError(formName: string, errorMessage: string) {
    this.sendEvent('form_error', {
      form_name: formName,
      error_message: errorMessage,
    });
  }

  // WhatsApp events
  whatsappClick(context: string, phone: string, message: string) {
    this.sendEvent('whatsapp_click', {
      context,
      phone,
      message_preview: message.substring(0, 50),
    });

    logger.whatsappClick(context, phone);
  }

  // Checkup events
  checkupGenerated(checkupType: string, selectedExams: number) {
    this.sendEvent('checkup_generated', {
      checkup_type: checkupType,
      exam_count: selectedExams,
    });
  }

  // Search events
  search(searchTerm: string, resultsCount?: number) {
    this.sendEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount,
    });
  }

  // Result access
  resultAccess(accessMethod: 'cpf' | 'matricula') {
    this.sendEvent('result_access', {
      access_method: accessMethod,
    });
  }

  // Scroll tracking
  scrollDepth(percentage: number) {
    this.sendEvent('scroll', {
      percent_scrolled: percentage,
    });
  }

  // Click tracking genérico
  click(elementName: string, elementType: string) {
    this.sendEvent('click', {
      element_name: elementName,
      element_type: elementType,
    });
  }

  // Engagement time
  userEngagement(engagementTimeMs: number) {
    this.sendEvent('user_engagement', {
      engagement_time_msec: engagementTimeMs,
    });
  }

  // Conversions
  conversion(conversionType: string, value?: number) {
    this.sendEvent('conversion', {
      conversion_type: conversionType,
      value,
      currency: 'BRL',
    });
  }

  // Error tracking
  errorOccurred(errorMessage: string, errorType: string, fatal: boolean = false) {
    this.sendEvent('exception', {
      description: errorMessage,
      error_type: errorType,
      fatal,
    });
  }
}

// Singleton instance
export const analytics = new Analytics();

// Web Vitals tracking
export function initWebVitals() {
  if ('web-vital' in window || !import.meta.env.PROD) {
    return;
  }

  // Importa web-vitals dinamicamente apenas em produção
  import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
    onCLS((metric) => {
      analytics.sendEvent('web_vitals', {
        name: 'CLS',
        value: Math.round(metric.value * 1000),
        rating: metric.rating,
      });
      logger.performanceMetric('CLS', metric.value, 'score');
    });

    onINP((metric) => {
      analytics.sendEvent('web_vitals', {
        name: 'INP',
        value: Math.round(metric.value),
        rating: metric.rating,
      });
      logger.performanceMetric('INP', metric.value, 'ms');
    });

    onFCP((metric) => {
      analytics.sendEvent('web_vitals', {
        name: 'FCP',
        value: Math.round(metric.value),
        rating: metric.rating,
      });
      logger.performanceMetric('FCP', metric.value, 'ms');
    });

    onLCP((metric) => {
      analytics.sendEvent('web_vitals', {
        name: 'LCP',
        value: Math.round(metric.value),
        rating: metric.rating,
      });
      logger.performanceMetric('LCP', metric.value, 'ms');
    });

    onTTFB((metric) => {
      analytics.sendEvent('web_vitals', {
        name: 'TTFB',
        value: Math.round(metric.value),
        rating: metric.rating,
      });
      logger.performanceMetric('TTFB', metric.value, 'ms');
    });

    logger.info('Web Vitals tracking initialized');
  }).catch((error) => {
    logger.error('Failed to initialize Web Vitals', error);
  });
}

// Long task monitoring
export function initLongTaskMonitoring() {
  if (!('PerformanceObserver' in window) || !import.meta.env.PROD) {
    return;
  }

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Long tasks são tarefas que levam mais de 50ms
        if (entry.duration > 50) {
          analytics.sendEvent('long_task', {
            duration: Math.round(entry.duration),
            start_time: Math.round(entry.startTime),
          });

          logger.warn('Long task detected', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
    logger.info('Long task monitoring initialized');
  } catch (error) {
    logger.error('Failed to initialize long task monitoring', error as Error);
  }
}
