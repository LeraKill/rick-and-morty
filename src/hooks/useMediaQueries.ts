import { useEffect, useState } from "react";
import { themeObj } from "theme/themeObj";

const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(false);

  const handleMatches = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleMatches();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleMatches);
    } else {
      matchMedia.addEventListener("change", handleMatches);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleMatches);
      } else {
        matchMedia.removeEventListener("change", handleMatches);
      }
    };
  }, [query]);

  return matches;
};

export const useMobile = () => useMediaQuery(themeObj.media.small);

export default useMediaQuery;
