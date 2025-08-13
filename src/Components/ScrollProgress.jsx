import { useState, useEffect } from 'react';
import './scroll-progress.css';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const total = docHeight - winHeight;
      const percent = total > 0 ? (scrollY / total) * 100 : 0;
      setScrollPercent(Math.min(Math.max(percent, 0), 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}


