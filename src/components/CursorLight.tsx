'use client';

import { useEffect, useRef } from 'react';

export const CursorLight = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        containerRef.current.style.background = `
          radial-gradient(circle 150px at ${clientX}px ${clientY}px, rgba(255, 20, 147, 0.15), transparent 80%),
          linear-gradient(135deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none transition-all duration-75"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)',
        zIndex: 0,
      }}
    />
  );
};
