import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as faceMesh from "@mediapipe/face_mesh";
import * as cam from "@mediapipe/camera_utils";
import Footer from "../Footer/Footer";
import HeaderNavbar from "../Navbar/HeaderNavbar";

const FaceRecognitionUI = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const faceMeshModel = new faceMesh.FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMeshModel.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    faceMeshModel.onResults((results) => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        results.multiFaceLandmarks.forEach((landmarks) => {
          drawFaceMesh(ctx, landmarks);
        });
      } else {
        console.log("No face detected.");
      }
    });

    if (webcamRef.current?.video) {
      const camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMeshModel.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }

  }, []);

  return (
    <>
      <HeaderNavbar />
      <div className="main-container" style={{ marginTop: '100px', marginBottom: "100px", }}
      
      >
        <div className="webcam-container">
          {/* Webcam */}
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: 0.3,
            }}
          />
          {/* Face Mesh Canvas */}
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
          {/* Processing UI Overlay */}
          <div className="overlay">
            <span className="processing-text">SCANNING FACE...</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="scanning-line"></div>
          </div>
        </div>
      </div>
      <Footer />
      <style>
        {`
          .main-container {
            position: relative;
            width: 640px;
            height: 480px;
            background-color: #333;
            border-radius: 12px;
            box-shadow: 0px 0px 20px rgba(173, 216, 230, 0.2);
            margin: 0 auto;
          }
          .webcam-container {
            position: relative;
            width: 100%;
            height: 100%;
            background: black;
            border-radius: 12px;
          }
          .overlay {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(173, 216, 230, 0.9);
            font-family: "monospace";
            text-align: center;
            font-weight: bold;
            z-index: 10;
          }
          .processing-text {
            font-size: 20px;
            letter-spacing: 3px;
          }
          .progress-bar {
            width: 220px;
            height: 8px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            margin-top: 10px;
            overflow: hidden;
          }
          .progress-fill {
            width: 80%;
            height: 100%;
            background-color: rgba(173, 216, 230, 0.8);
            border-radius: 5px;
            transition: width 2s ease-in-out;
          }
          .scanning-line {
            position: absolute;
            top: 0;
            left: 50%;
            width: 100%;
            height: 2px;
            background: rgba(173, 216, 230, 0.8);
            animation: scanMove 3s linear infinite;
          }
          @keyframes scanMove {
            0% { top: 0; }
            50% { top: 50%; }
            100% { top: 100%; }
          }
        `}
      </style>
    </>
  );
};

// Face Mesh Drawing Function
const drawFaceMesh = (ctx, landmarks) => {
  ctx.strokeStyle = "rgba(173, 216, 230, 0.8)"; // Light cyan color
  ctx.lineWidth = 1.2;
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)"; // White dots with transparency

  for (let i = 0; i < landmarks.length; i++) {
    const x = landmarks[i].x * ctx.canvas.width;
    const y = landmarks[i].y * ctx.canvas.height;

    // Draw points
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
    ctx.fill();

    // Connect lines
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

export default FaceRecognitionUI;
