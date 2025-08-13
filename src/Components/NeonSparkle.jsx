// src/Components/NeonSparkle.jsx
import Magnet from "./Magnet";
import { Sparkle } from "lucide-react";
import "./NeonSparkle.css";

export default function NeonSparkle({
  size = 320,
  strength = 1,
  padding = 1000,
  strokeWidth = 2.1,
}) {
  return (
    <Magnet magnetStrength={strength} padding={padding}>
      <div style={{ width: size, height: size, display: "grid", placeItems: "center" }}>
        <div className="neon-sparkle-wrap">
          <div className="neon-sparkle-halo" />
          <Sparkle className="neon-sparkle" strokeWidth={strokeWidth} aria-hidden />
        </div>
      </div>
    </Magnet>
  );
}
