// src/Components/WorkTimeline.jsx
import { useEffect, useRef, useState } from "react";

export default function WorkTimeline({ targetRef, top = 120 }) {
  const colRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const target = targetRef?.current;
      if (!target) return;

      // Measure the cards column
      const rect = target.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      const height = target.scrollHeight; // includes inner gaps/padding

      setTrackHeight(height);

      // Fill based on viewport center through the list
      const center = window.scrollY + window.innerHeight / 2;
      const ratio = (center - docTop) / height;
      const clamped = Math.max(0, Math.min(1, ratio));
      setProgress(clamped);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);

  return (
    <div ref={colRef} className="relative w-10 shrink-0">
      <div className="sticky" style={{ top }}>
        <div
          className="relative w-[2px] bg-neutral-1000 overflow-hidden"
          style={{ height: trackHeight }}
        >
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-500"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
