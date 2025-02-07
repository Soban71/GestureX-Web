import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Webcam from 'react-webcam';
import { drawRect } from './utilities';
import HeaderNavbar from '../Navbar/HeaderNavbar';
import Footer from '../Footer/Footer';

function ObjectDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [objects, setObjects] = useState([]);

  // Load the Coco-SSD model
  const runObjectDetection = async () => {
    const model = await cocoSsd.load();
    console.log('Coco-SSD model loaded.');
    detect(model);
  };

  // Detect objects
  const detect = async (model) => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const predictions = await model.detect(video);
      setObjects(predictions);

      const ctx = canvasRef.current.getContext('2d');
      drawRect(predictions, ctx);
    }

    requestAnimationFrame(() => detect(model));
  };

  useEffect(() => {
    runObjectDetection();
  }, []);

  return (
    <div>
      <HeaderNavbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #1e1e1e, #444)',
          fontFamily: 'Arial, sans-serif',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '80%',
            height: '70vh',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '20px',
          }}
        >
          {/* Left Side - Webcam */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Webcam
              ref={webcamRef}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                objectFit: 'cover',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Right Side - Object Detection Output */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Detected Objects
            </h2>
            <div
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '15px',
                borderRadius: '12px',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                overflowY: 'auto',
                maxHeight: '50vh',
                fontSize: '18px',
              }}
            >
              {objects.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {objects.map((object, index) => (
                    <li
                      key={index}
                      style={{
                        padding: '10px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'bold',
                      }}
                    >
                      <span>{object.class}</span>
                      <span style={{ color: '#4CAF50' }}>
                        {Math.round(object.score * 100)}%
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ccc' }}>
                  No objects detected
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ObjectDetection;
