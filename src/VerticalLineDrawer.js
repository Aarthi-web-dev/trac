import React, { useEffect, useRef } from 'react';

const VerticalLineDrawer = ({ connections, pinRefs }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    connections.forEach((conn) => {
      const fromEl = pinRefs.current[conn.from];
      const toEl = pinRefs.current[conn.to];

      if (!fromEl || !toEl) return;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const x1 = fromRect.left + window.scrollX;
      const y1 = fromRect.top + 4;
      const x2 = toRect.left + window.scrollX;
      const y2 = toRect.top + 4;

      ctx.beginPath();
      ctx.moveTo(x1 - rect.left, y1 - rect.top);
      ctx.lineTo(x2 - rect.left, y2 - rect.top);
      ctx.strokeStyle = conn.lineStyle.includes('solid') ? 'black' : 'gray';
      ctx.lineWidth = 2;
      ctx.setLineDash(conn.lineStyle.includes('dashed') ? [5, 5] : []);
      ctx.stroke();
    });
  }, [connections, pinRefs]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    />
  );
};

export default VerticalLineDrawer;