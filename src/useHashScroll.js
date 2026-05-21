import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useHashScroll(parameter) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === `/${parameter}`) {
      const element = document.getElementById(`${parameter}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]); 
}

export default useHashScroll;