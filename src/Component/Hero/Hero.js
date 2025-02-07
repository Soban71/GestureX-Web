import React from 'react';
import '../Styling/style.css';
import backgroundImage from '../assests/hero-bg.svg'
import Bannerone from '../assests/hero-banner-1.jpg'
import Bannertwo from '../assests/hero-banner-2.jpg'
import backgroundImages from '../assests/hero-bg.svg'
import heroShape from '../assests/hero-shape-1.svg'
import heroShapetwo from '../assests/hero-shape-2.png'
import videoBanner from '../assests/video-banner.jpg'
import videone from '../assests/video-shape-1.png'
import videotwo from '../assests/video-shape-2.png'
import Aboutushero from './Aboutushero';
import Hero_Linker from './Hero_Linker';
import Footer from '../Footer/Footer';
import HeaderNavbar from '../Navbar/HeaderNavbar';


function Hero() {
  return (
    <>

    <HeaderNavbar />
    <section
  className="section hero has-bg-image"
  id="home"
  aria-label="home"
  style={{ backgroundImage: `url(${backgroundImages})` }}
>
  <div className="container">
    <div className="hero-content">
      <h1 className="h1 section-title">
        Welcome to <span className="span">GestureX</span>
      </h1>

      <p className="hero-text">
        Unlock the power of gestures with AI. Control, interact, and innovate through cutting-edge technology designed to elevate your experience.
      </p>

      <a href="#features" className="btn has-before">
        <span className="span">Explore Features</span>
        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </div>

    <figure className="hero-banner">
      <div
        className="img-holder one"
        style={{ width: '270px', height: '300px' }}
      >
        <img
          src={Bannerone}
          width="270"
          height="300"
          alt="gesture recognition"
          className="img-cover"
        />
      </div>

      <div
        className="img-holder two"
        style={{ width: '240px', height: '370px' }}
      >
        <img
          src={Bannertwo}
          width="240"
          height="370"
          alt="gesture-based control"
          className="img-cover"
        />
      </div>

      <img
        src={heroShape}
        width="380"
        height="190"
        alt=""
        className="shape hero-shape-1"
      />

      <img
        src={heroShapetwo}
        width="622"
        height="551"
        alt=""
        className="shape hero-shape-2"
      />
    </figure>
  </div>
</section>


<section className="section stats" aria-label="stats">
  <div className="container">
    <ul className="grid-list">
      <li>
        <div
          className="stats-card"
          style={{ backgroundColor: "hsl(170, 75%, 41%)" }}
        >
          <h3 className="card-title">50K+</h3>
          <p className="card-text">Gestures Recognized</p>
        </div>
      </li>

      <li>
        <div
          className="stats-card"
          style={{ backgroundColor: "hsl(351, 83%, 61%)" }}
        >
          <h3 className="card-title">99.9%</h3>
          <p className="card-text">AI Accuracy Rate</p>
        </div>
      </li>

      <li>
        <div
          className="stats-card"
          style={{ backgroundColor: "hsl(260, 100%, 67%)" }}
        >
          <h3 className="card-title">25K+</h3>
          <p className="card-text">Users Worldwide</p>
        </div>
      </li>

      <li>
        <div
          className="stats-card"
          style={{ backgroundColor: "hsl(42, 94%, 55%)" }}
        >
          <h3 className="card-title">5K+</h3>
          <p className="card-text">Custom Interactions Built</p>
        </div>
      </li>
    </ul>
  </div>
</section>





<Aboutushero />




    <section
      className="video has-bg-image"
      aria-label="video"
      style={{ backgroundImage: "url('./assets/images/video-bg.png')" }}
    >
      <div className="container">
        <div className="video-card">
          {/* Video Banner */}
          <div
            className="video-banner img-holder has-after"
            style={{
              width: "100%", 
              height: "auto",
               marginBottom: '150px',
               marginTop: "70px"
            }}
          >
            <img
              src={videoBanner}
              width="970"
              height="550"
              loading="lazy"
              alt="video banner"
              className="img-cover"
              // style={{ marginBottom: 300 }}
            />
            <button className="play-btn" aria-label="play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          {/* Shapes */}
          <img
            src={videone}
            width="1089"
            height="605"
            loading="lazy"
            alt=""
            className="shape video-shape-1"
          />
          
        </div>
      </div>
    </section>

<Hero_Linker />

<Footer />
</>



     

  
  );
}

export default Hero;

