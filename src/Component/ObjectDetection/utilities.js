export const drawRect = (predictions, ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;
    const text = `${prediction.class} (${Math.round(prediction.score * 100)}%)`;
    
    // Set a unique color for each detected object
    const colors = ['#FF3B3F', '#4CAF50', '#FFC107', '#00BCD4', '#673AB7'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Draw bounding box
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, width, height);
    
    // Draw filled text background
    ctx.fillStyle = color;
    ctx.fillRect(x, y - 20, ctx.measureText(text).width + 10, 20);
    
    // Draw text
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Arial';
    ctx.fillText(text, x + 5, y - 5);
  });
};
