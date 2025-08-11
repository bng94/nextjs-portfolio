import { useState, useEffect } from "react";
import { isRenderingOnServer, QUERY } from "../utils/variables";

const getInitialState = (): boolean =>
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
