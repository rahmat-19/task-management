// src/useScrollDirection.js
import { useState, useEffect } from "react";

const useScrollDirection = (initialVisible, scrollThreshold) => {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlScroll);
    return () => {
      window.removeEventListener("scroll", controlScroll);
    };
  }, [lastScrollY]);

  return isVisible;
};

const menuNavbarLandingPage = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/service",
    label: "Fitur",
  },
  {
    link: "/portofolio",
    label: "Contact",
  },
];

export { useScrollDirection, menuNavbarLandingPage };
