import { useState, useEffect, useRef, RefObject } from "react";

interface UseImageLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseImageLazyLoadReturn {
  ref: RefObject<HTMLElement>;
  isInView: boolean;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

export const useImageLazyLoad = (
  options: UseImageLazyLoadOptions = {}
): UseImageLazyLoadReturn => {
  const {
    threshold = 0.01,
    rootMargin = "50px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref: ref as RefObject<HTMLElement>,
    isInView,
    isLoaded,
    setIsLoaded,
  };
};

export default useImageLazyLoad;
