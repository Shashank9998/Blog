import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This immediately moves the scroll to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the URL path changes

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;