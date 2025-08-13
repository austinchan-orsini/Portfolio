import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const sections = ["Home", "Work", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const indicatorRef = useRef(null);
  const buttonRefs = useRef([]);

  // Update nav indicator style when `active` changes
  useEffect(() => {
    const el = buttonRefs.current[active];
    if (el && indicatorRef.current) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [active]);

  // Scroll listener to update nav highlight based on current section
  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((id, idx) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance && rect.bottom > 0) {
            minDistance = distance;
            closestIndex = idx;
          }
        }
      });

      setActive(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on button click (forces scroll event triggering)
  const handleClick = (index) => {
    const section = document.getElementById(sections[index].toLowerCase());
    if (section) {
      const yOffset = -80; // adjust this to match your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-background">
        <div ref={indicatorRef} className="nav-indicator" />
        {sections.map((label, idx) => (
          <button
            key={label}
            className="nav-button"
            ref={(el) => (buttonRefs.current[idx] = el)}
            onClick={() => handleClick(idx)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
