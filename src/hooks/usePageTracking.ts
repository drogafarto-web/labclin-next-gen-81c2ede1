import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

/**
 * Hook para rastrear mudanças de página automaticamente
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track pageview quando a rota mudar
    const pagePath = location.pathname + location.search;
    const pageTitle = document.title;

    analytics.pageView(pagePath, pageTitle);
  }, [location]);
}
