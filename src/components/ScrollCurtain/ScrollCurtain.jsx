import { useEffect, useRef, useState } from 'react';
import closedCurtain from '../../assets/curtains/curtain-closed.png';
import './ScrollCurtain.css';

export function ScrollCurtain() {
  const [phase, setPhase] = useState('covered');
  const hasStarted = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done');
      return undefined;
    }
    if (phase !== 'covered') return undefined;
    const start = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;
      setPhase('opening');
    };
    const onWheel = (event) => { if (event.deltaY > 2) start(); };
    let startY = 0;
    const onTouchStart = (event) => { startY = event.touches[0]?.clientY ?? 0; };
    const onTouchEnd = (event) => {
      if (startY - (event.changedTouches[0]?.clientY ?? 0) > 12) start();
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === 'opening') {
      const timer = window.setTimeout(() => setPhase('done'), 2300);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [phase]);

  if (phase === 'done') return null;
  return <div className={`scroll-curtain scroll-curtain--${phase}`} aria-hidden="true">
    <div className="scroll-curtain__panel scroll-curtain__panel--left" style={{ backgroundImage: `url(${closedCurtain})` }} />
    <div className="scroll-curtain__panel scroll-curtain__panel--right" style={{ backgroundImage: `url(${closedCurtain})` }} />
    <div className="scroll-curtain__note">
      <div className="scroll-curtain__brand"><strong>Carlos Reyes</strong><span>Decoraciones</span></div>
      <p>Bienvenidos</p>
      <small>Deslizá para descubrir</small>
    </div>
  </div>;
}
