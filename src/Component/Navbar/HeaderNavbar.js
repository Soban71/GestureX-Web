import React from 'react'
import '../Styling/style.css';
import logo from '../assests/logo.svg'
import { Link } from 'react-router-dom';

function HeaderNavbar() {
  return (
    <div>
  <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">
        <img src={logo} width="60" height="50" alt="GestureX logo" />
      </a>

      <nav class="navbar" data-navbar>
        <div class="wrapper">
          <a href="#" class="logo">
            <img src={logo} width="162" height="50" alt="GestureX logo"/>
          </a>

          <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">
          <li class="navbar-item">
            <Link to="/" class="navbar-link" data-nav-link>Home</Link>
          </li>
      
          <li class="navbar-item">
            <Link to="/component/About" class="navbar-link" data-nav-link>About us</Link>
          </li>
        
          <li class="navbar-item">
            <Link to="/component/Contact" class="navbar-link" data-nav-link>Contact</Link>
          </li>

          <li class="navbar-item">
            <Link to="/component/Service" class="navbar-link" data-nav-link>Service</Link>
          </li>


        </ul>
      </nav>

      <div class="header-actions">
        <a href="#demo" class="btn has-before">
          <span class="span">Try GestureX</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>

        <button class="header-action-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>
</div>


  )
}

export default HeaderNavbar
