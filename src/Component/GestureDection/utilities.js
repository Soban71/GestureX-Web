export const drawHand = (predictions, ctx) => {
    if (predictions.length > 0) {
      predictions.forEach((prediction) => {
        const landmarks = prediction.landmarks;
  
        // Draw bounding box
        const xCoords = landmarks.map(point => point[0]);
        const yCoords = landmarks.map(point => point[1]);
        const minX = Math.min(...xCoords);
        const maxX = Math.max(...xCoords);
        const minY = Math.min(...yCoords);
        const maxY = Math.max(...yCoords);
  
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.rect(minX, minY, maxX - minX, maxY - minY);
        ctx.stroke();
  
        // Draw connections
        const connections = [
          [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
          [0, 5], [5, 6], [6, 7], [7, 8], // Index finger
          [5, 9], [9, 10], [10, 11], [11, 12], // Middle finger
          [9, 13], [13, 14], [14, 15], [15, 16], // Ring finger
          [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
        ];
  
        connections.forEach(pair => {
          const [startIdx, endIdx] = pair;
          const start = landmarks[startIdx];
          const end = landmarks[endIdx];
  
          ctx.beginPath();
          ctx.moveTo(start[0], start[1]);
          ctx.lineTo(end[0], end[1]);
          ctx.strokeStyle = 'blue';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      });
    }
  };
  