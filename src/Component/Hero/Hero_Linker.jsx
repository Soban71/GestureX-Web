import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';
import backGround from '../assests/blog-bg.svg';
import Gesture from '../assests/gesture-detection.jpg';
import { Link } from 'react-router-dom';

function Hero_Linker() {
  return (
    <div>
      <section
        className="section blog has-bg-image"
        id="blog"
        aria-label="blog"
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat',
          marginTop:"60px" // Prevents repeating of the image
        }}
      >
        <div className="container">
          <p className="section-subtitle">Latest Features</p>
          <h2 className="h2 section-title">Explore What's New with GestureX</h2>

          <ul className="grid-list">
            <li>
              <div className="blog-card">
                <figure className="card-banner img-holder has-after" style={{height:250}}>
                  <img
                    src={Gesture}
                    width="370"
                    height="370"
                    loading="lazy"
                    alt="Unlock Advanced Gesture Detection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <Link href="/component/GestureDetection" className="card-btn" 
                 >

                    <FaArrowRight aria-hidden="true"  />
                  </Link>

                  <Link to="/component/GestureDetection" className="card-subtitle">Gesture Detection</Link>

                  <h3 className="h3">
                    <Link to="/component/GestureDetection" className="card-title">
                      Unlock Advanced Gesture Detection
                    </Link>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <FaCalendarAlt aria-hidden="true" />
                      <span className="span">Jan 20, 2025</span>
                    </li>

                    <li className="card-meta-item">
                      <FaCommentDots aria-hidden="true" />
                      <span className="span">Comments 12</span>
                    </li>
                  </ul>

                  <p className="card-text">
                    Learn how GestureX identifies hand gestures with precision for improved control and interaction.
                  </p>
                </div>
              </div>
            </li>




            <li>
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{height:250}}>
      <img
        src="https://miro.medium.com/v2/da:true/resize:fit:1200/1*CIh_NdkVDHKwi4MnPpts1w.gif"
        width="370"
        height="370"
        loading="lazy"
        alt="AI Face Landmark Detection for Precise Analysis"
        className="img-cover"
      />
    </figure>

    <div className="card-content">
    <Link href="/component/GestureDetection" className="card-btn" 
                 >

                    <FaArrowRight aria-hidden="true"  />
                  </Link>

                  <Link to="/component/FaceLandmarkDetection" className="card-subtitle">Face Landmark Detection</Link>

      <h3 className="h3">
        <a href="#" className="card-title">
          AI Face Landmark Detection for Precise Analysis
        </a>
      </h3>

      <ul className="card-meta-list">
        <li className="card-meta-item">
          <FaCalendarAlt aria-hidden="true" />
          <span className="span">Jan 22, 2025</span>
        </li>

        <li className="card-meta-item">
          <FaCommentDots aria-hidden="true" />
          <span className="span">Comments 18</span>
        </li>
      </ul>

      <p className="card-text">
        Explore how AI-powered face landmark detection enhances facial recognition, emotion analysis, and AR applications.
      </p>
    </div>
  </div>
</li>


<li>
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ height: 250 }}>
      <img
        src="https://www.shutterstock.com/shutterstock/videos/1064044828/thumb/4.jpg?ip=x480"
        width="370"
        height="370"
        loading="lazy"
        alt="Real-Time Object Detection for Smarter Interactions"
        className="img-cover"
      />
    </figure>

    <div className="card-content">
      <a href="#" className="card-btn" aria-label="read more">
        <FaArrowRight aria-hidden="true" />
      </a>

      <Link to="/component/ObjectDetection" className="card-subtitle">Real-Time Object Detection</Link>

      <h3 className="h3">
        <a href="#" className="card-title">
          Identify Objects Instantly with AI-Powered Detection
        </a>
      </h3>

      <ul className="card-meta-list">
        <li className="card-meta-item">
          <FaCalendarAlt aria-hidden="true" />
          <span className="span">Jan 25, 2025</span>
        </li>

        <li className="card-meta-item">
          <FaCommentDots aria-hidden="true" />
          <span className="span">Comments 25</span>
        </li>
      </ul>

      <p className="card-text">
        Explore how AI-driven real-time object detection enhances automation, security, and accessibility by identifying objects with precision.
      </p>
    </div>
  </div>
</li>

          </ul>

         
        </div>
      </section>
    </div>
  );
}

export default Hero_Linker;
