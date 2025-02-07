export const drawFaceMesh3D = (ctx, landmarks) => {
  ctx.strokeStyle = "rgba(0, 255, 255, 0.9)";
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(255, 0, 0, 0.7)";

  for (let i = 0; i < landmarks.length; i++) {
    const x = landmarks[i].x * ctx.canvas.width;
    const y = landmarks[i].y * ctx.canvas.height;
    const z = landmarks[i].z * 200; // 3D effect by scaling z

    // Draw glowing dots
    ctx.beginPath();
    ctx.arc(x, y, 2 + z / 50, 0, 2 * Math.PI);
    ctx.fill();

    // Connect lines for 3D grid
    if (i % 5 === 0 && i < landmarks.length - 1) {
      const nextX = landmarks[i + 1].x * ctx.canvas.width;
      const nextY = landmarks[i + 1].y * ctx.canvas.height;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nextX, nextY);
      ctx.stroke();
    }
  }
};
