import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScroll(parameter) {
  const { pathname } = useLocation();

  const targetPath = parameter === "home" ? "/" : `/${parameter}`;

  useEffect(() => {
    if (pathname === targetPath) {
      const element = document.getElementById(`${parameter}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, parameter]); 
}

export default useScroll;