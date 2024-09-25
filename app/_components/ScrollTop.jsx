"use client";
import { useState, useEffect } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 200px from top
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Listen to scroll events
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 text-[30px] right-4 font-bold bg-[#E2508D] text-white p-3 rounded-full shadow-lg hover:opacity-1 transition-all duration-75 ease-in-out">
          <RiArrowUpSLine />
        </button>
      )}
    </>
  );
}

export default ScrollTop;
