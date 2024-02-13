"use client";

import "../styles/scrollToTopBtn.scss";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkIsVisible = () => {
    if (!isVisible && window.scrollY >= 600) setIsVisible(true);
    else if (isVisible && window.scrollY < 600) setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIsVisible);

    return () => {
      window.removeEventListener("scroll", checkIsVisible);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isVisible ? (
        <FontAwesomeIcon
          icon={faChevronUp}
          className="scroll-to-top-btn"
          onClick={scrollToTop}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ScrollToTopBtn;
