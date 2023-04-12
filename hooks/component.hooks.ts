import { useEffect, useState } from "react";

const useComponentUtils = () => {
  const useScrollDistance = () => {
    const [scrollDistance, setScrollDistance] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setScrollDistance(scrollTop);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return scrollDistance;
  }

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<any>({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  }

  return { useScrollDistance, useWindowSize }
}

export default useComponentUtils;