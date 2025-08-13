// ./components/ShineBorder.jsx
import "./shine-border.css";

export default function ShineBorder({ children, className = "" }) {
  return (
    <div className={`shine-border-container ${className}`}>
      <div className="shine-border-overlay" />
      <div className="shine-border-content">{children}</div>
    </div>
  );
}
