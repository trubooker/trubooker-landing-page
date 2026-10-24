"use client";

import { useEffect, useState } from "react";

// Custom hook to handle media queries
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const listener = () => {
      setMatches(mediaQueryList.matches);
    };

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addListener(listener);

    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
}
