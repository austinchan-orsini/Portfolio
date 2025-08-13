import Magnet from './Magnet';
import DinoOutline from '../assets/dino_outline.svg';
import './NeonDino.css';
export default function NeonDino({
  size = 540,
  strength = 1,
  padding = 1500,
}) {
  return (
    <Magnet magnetStrength={strength} padding={padding}>
      <div
        style={{
          width: size,
          height: size,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <img
          src={DinoOutline}
          alt="Neon Dino"
          className="neon-dino"
          draggable={false}
        />
      </div>
    </Magnet>
  );
}
