import React from 'react'
import '../Styling/style.css'
import Aboutimage from '../assests/about-shape-4.svg'
import AboutImageThree from '../assests/about-shape-3.png'
import AboutImageTwo from '../assests/about-shape-2.svg'
import AboutImageOne from '../assests/about-shape-1.svg'
import AboutBanner from '../assests/about-banner.jpg'

function Aboutushero() {
  return (
   <>
  <section class="section about" id="about" aria-label="about">
  <div class="container">

    <figure class="about-banner">

      <div class="img-holder">
        <img src={AboutBanner} width="520" height="370" loading="lazy" alt="GestureX banner"
          class="img-cover" />
      </div>

      <img src={AboutImageOne} width="360" height="420" loading="lazy" alt=""
        class="shape about-shape-1" />

      <img src={AboutImageTwo} width="371" height="220" loading="lazy" alt=""
        class="shape about-shape-2" />

      <img src={AboutImageThree} width="722" height="528" loading="lazy" alt=""
        class="shape about-shape-3" />

    </figure>
    

    <div class="about-content">

      <p class="section-subtitle">About GestureX</p>

      <h2 class="h2 section-title">
        Transforming Interactions with <span class="span">Gesture Recognition</span>
      </h2>

      <p class="section-text">
        At GestureX, we are redefining how people interact with technology using cutting-edge AI-powered gesture detection. Whether you're controlling devices, creating immersive experiences, or simplifying tasks, GestureX makes it seamless, intuitive, and innovative.
      </p>

      <ul class="about-list">

        <li class="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
          <span class="span">AI-Powered Gesture Recognition</span>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
          <span class="span">Real-Time Interaction</span>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
          <span class="span">Customizable for Your Needs</span>
        </li>

      </ul>

      <img src={Aboutimage} width="100" height="100" loading="lazy" alt="GestureX logo"
        class="shape about-shape-4" />

    </div>

  </div>
</section>

  </>
  )
}

export default Aboutushero
