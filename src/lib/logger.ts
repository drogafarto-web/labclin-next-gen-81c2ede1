/**
 * Logger estruturado para toda a aplicação
 * Centraliza logs com níveis, contexto e preparação para serviços externos
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  timestamp: string;
  userAgent: string;
  page: string;
  url: string;
  level: LogLevel;
}

interface LogEntry {
  message: string;
  context: LogContext;
  data?: Record<string, any>;
  error?: Error;
}

class Logger {
  private isDevelopment = import.meta.env.DEV;
  private isProduction = import.meta.env.PROD;

  private getContext(level: LogLevel): LogContext {
    return {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      page: document.title,
      url: window.location.href,
      level,
    };
  }

  private formatLogEntry(entry: LogEntry): string {
    const { message, context, data, error } = entry;
    let formatted = `[${context.level.toUpperCase()}] ${context.timestamp} - ${message}`;
    
    if (data) {
      formatted += `\nData: ${JSON.stringify(data, null, 2)}`;
    }
    
    if (error) {
      formatted += `\nError: ${error.message}\nStack: ${error.stack}`;
    }
    
    formatted += `\nPage: ${context.page} (${context.url})`;
    
    return formatted;
  }

  private sendToExternalService(entry: LogEntry) {
    // TODO: Integração com serviços externos (Sentry, LogRocket, etc)
    // Exemplo para Sentry:
    // if (entry.context.level === 'error' && entry.error) {
    //   Sentry.captureException(entry.error, {
    //     extra: { ...entry.data, context: entry.context }
    //   });
    // }
    
    // Por enquanto, apenas preparamos a estrutura
    if (this.isProduction && entry.context.level === 'error') {
      // Em produção, erros podem ser enviados para API de logging
      console.warn('Error logged (configure external service):', entry);
    }
  }

  debug(message: string, data?: Record<string, any>) {
    if (!this.isDevelopment) return;

    const entry: LogEntry = {
      message,
      context: this.getContext('debug'),
      data,
    };

    console.debug(this.formatLogEntry(entry));
  }

  info(message: string, data?: Record<string, any>) {
    const entry: LogEntry = {
      message,
      context: this.getContext('info'),
      data,
    };

    if (this.isDevelopment) {
      console.info(this.formatLogEntry(entry));
    }
  }

  warn(message: string, data?: Record<string, any>) {
    const entry: LogEntry = {
      message,
      context: this.getContext('warn'),
      data,
    };

    console.warn(this.formatLogEntry(entry));
    this.sendToExternalService(entry);
  }

  error(message: string, error?: Error, data?: Record<string, any>) {
    const entry: LogEntry = {
      message,
      context: this.getContext('error'),
      data,
      error,
    };

    console.error(this.formatLogEntry(entry));
    this.sendToExternalService(entry);
  }

  // Métodos específicos para eventos comuns
  formSubmit(formName: string, success: boolean, data?: Record<string, any>) {
    this.info(`Form submitted: ${formName}`, {
      formName,
      success,
      ...data,
    });
  }

  whatsappClick(context: string, phone: string) {
    this.info('WhatsApp click', {
      context,
      phone,
    });
  }

  pageView(pageName: string) {
    this.info('Page view', {
      pageName,
      referrer: document.referrer,
    });
  }

  performanceMetric(metricName: string, value: number, unit: string = 'ms') {
    this.debug('Performance metric', {
      metricName,
      value,
      unit,
    });
  }
}

// Singleton instance
export const logger = new Logger();

// Integração com Sentry (comentado, pronto para ativar)
// import * as Sentry from "@sentry/react";
// 
// Sentry.init({
//   dsn: import.meta.env.VITE_SENTRY_DSN,
//   integrations: [
//     new Sentry.BrowserTracing(),
//     new Sentry.Replay({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
//   environment: import.meta.env.MODE,
// });
