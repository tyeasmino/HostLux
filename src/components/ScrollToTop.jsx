import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight === 0) {
        setScrollProgress(0); // Prevent division by zero
      } else {
        const progress = (scrollTop / scrollHeight) * 100; // Dynamic progress
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 w-14 h-14 flex items-center justify-center rounded-full border hover:border-orange-500 transition-all duration-300 bg-transparent shadow-lg"
    >
      <svg width="60" height="60" viewBox="0 0 40 40" className="absolute ">
        {/* Background Circle (Thin border) */}
        <circle cx="20" cy="20" r="17" fill="none" stroke="#ddd" strokeWidth="2" />

        {/* Progress Circle (Thinner stroke) */}
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="none"
          stroke="#FE8730"
          strokeWidth="2"  /* Reduce thickness */
          strokeDasharray="106"  /* Circle circumference */
          strokeDashoffset={106 - (scrollProgress * 106) / 100}  /* Dynamic progress */
          strokeLinecap="round"
          transform="rotate(-90 20 20)"  /* Start from top */
        />
      </svg>

      <FiArrowUp className="relative z-10 text-lg text-orange-600" />
    </button>
  );
};

export default ScrollToTop;
