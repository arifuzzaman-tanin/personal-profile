import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [screenType, setScreenType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;

      setScreenType({
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
        isDesktop: width > 1024,
      });
    };

    updateScreenType();

    window.addEventListener("resize", updateScreenType);
    return () => window.removeEventListener("resize", updateScreenType);
  }, []);

  return screenType;
};

export default useMediaQuery;
