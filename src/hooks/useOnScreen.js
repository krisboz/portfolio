import { useRef, useState, useEffect, useMemo } from "react";

const useOnScreen = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer]);

  return [ref, isIntersecting];
};

export default useOnScreen;
