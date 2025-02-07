import React from 'react';

import Hero from './Component/Hero/Hero';
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import GestureDetection from '../src/Component/GestureDection/GestureDetection'
import AboutUs from './Component/AboutUs/About';
import ContactUs from './Component/ContactUs/Contactus';
import FaceLandmarkDetection from './Component/LandmarkDetection/FaceLandmarkDetection';
import ObjectDetection from './Component/ObjectDetection/ObjectDetection';
import Services from './Component/ServicePage/Service';

function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/component/Service" element={<Services/>}/> 
    <Route path="/component/ObjectDetection" element={<ObjectDetection/>}/>
    <Route path="/component/GestureDetection" element={<GestureDetection/>}/>
    <Route path="/component/About" element={<AboutUs/>}/>
    <Route path="/component/Contact" element={<ContactUs/>}/>
    <Route path="/component/FaceLandmarkDetection" element={< FaceLandmarkDetection/>}/>

   
    </Routes>

    </BrowserRouter>


  )
}

export default App




// // Import required dependencies
// import React, { useEffect, useRef, useState } from 'react';
// import * as tf from '@tensorflow/tfjs';
// import * as handpose from '@tensorflow-models/handpose';
// import Webcam from 'react-webcam';
// import { drawHand } from './utilities';

// const GestureDetectionApp = () => {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [gesture, setGesture] = useState('No Gesture Found');

//   // Load the Handpose model
//   const runHandpose = async () => {
//     const net = await handpose.load();
//     console.log('Handpose model loaded.');
//     detect(net);
//   };

//   // Detect gestures
//   const detect = async (net) => {
//     if (
//       typeof webcamRef.current !== 'undefined' &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       const hand = await net.estimateHands(video);
//       if (hand.length > 0) {
//         const detectedGesture = recognizeGesture(hand[0]);
//         setGesture(detectedGesture !== 'Unknown Gesture' ? detectedGesture : 'No Gesture Found');
//       } else {
//         setGesture('No Gesture Found');
//       }

//       const ctx = canvasRef.current.getContext('2d');
//       drawHand(hand, ctx);
//     }

//     requestAnimationFrame(() => detect(net));
//   };

//   // Recognize gestures based on landmarks
//   const recognizeGesture = (hand) => {
//     const landmarks = hand.landmarks;

//     const thumbTip = landmarks[4];
//     const indexTip = landmarks[8];
//     const middleTip = landmarks[12];
//     const ringTip = landmarks[16];
//     const pinkyTip = landmarks[20];

//     const thumbBase = landmarks[2];
//     const indexBase = landmarks[5];

//     // Thumbs Up
//     const isThumbUp = thumbTip[1] < indexTip[1] && thumbTip[1] < middleTip[1];
//     if (isThumbUp) return 'Thumbs Up';
//     // Thumbs Down
// // const isThumbDown = thumbTip[1] > indexTip[1] && thumbTip[1] > middleTip[1];
// // if (isThumbDown) return 'Thumbs Down';


//     // Peace Sign
//     const isPeaceSign =
//       indexTip[1] < ringTip[1] &&
//       middleTip[1] < ringTip[1] &&
//       ringTip[1] > indexBase[1] &&
//       pinkyTip[1] > indexBase[1];
//     if (isPeaceSign) return 'Victory Sign';

//     // Fist
//     const isFist =
//       Math.abs(indexTip[1] - middleTip[1]) < 10 &&
//       Math.abs(middleTip[1] - ringTip[1]) < 10 &&
//       Math.abs(ringTip[1] - pinkyTip[1]) < 10;
//     if (isFist) return 'Fist';

//     // OK Sign
//     const isOKSign =
//       Math.hypot(thumbTip[0] - indexTip[0], thumbTip[1] - indexTip[1]) < 30 &&
//       middleTip[1] > indexBase[1] &&
//       ringTip[1] > indexBase[1] &&
//       pinkyTip[1] > indexBase[1];
//     if (isOKSign) return 'OK Sign';

//     // Wave (basic side-to-side movement, track x-coordinate changes)
//     // For simplicity, we'll consider a single-frame approximation here
//     if (hand.annotations && hand.annotations.indexFinger) {
//       const indexX = hand.annotations.indexFinger[3][0];
//       const waveMovement = Math.abs(indexX - indexBase[0]);
//       if (waveMovement > 30) return 'Wave';

      
//     }

//     return 'Unknown Gesture';
//   };

//   useEffect(() => {
//     runHandpose();
//   }, []);

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       backgroundColor: '#f5f5f5',
//       fontFamily: 'Arial, sans-serif',
//     }}>
//       <header style={{
//         width: '100%',
//         padding: '20px 0',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         textAlign: 'center',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       }}>
//         <h1 style={{ margin: 0 }}>Gesture Detection App</h1>
//       </header>
//       <main style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         position: 'relative',
//         marginTop: '20px',
//       }}>
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: 'relative',
//             borderRadius: '10px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//             width: 640,
//             height: 480,
//           }}
//         />
//         <canvas
//           ref={canvasRef}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: '50%',
//             transform: 'translateX(-50%)',
//             borderRadius: '10px',
//             pointerEvents: 'none',
//             width: 640,
//             height: 480,
//           }}
//         />
//         <h2 style={{
//           marginTop: '20px',
//           padding: '10px 20px',
//           backgroundColor: '#fff',
//           borderRadius: '5px',
//           boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//         }}>Detected Gesture: <span style={{ color: '#4CAF50' }}>{gesture}</span></h2>
//       </main>
//       <footer style={{
//         marginTop: 'auto',
//         padding: '10px 0',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         textAlign: 'center',
//         width: '100%',
//       }}>
//         <p style={{ margin: 0 }}>© 2025 Gesture Detection App. All rights reserved.</p>
//     
//     </div>
//   );
// };

// export default GestureDetectionApp;





