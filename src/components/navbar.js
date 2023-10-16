import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import NavLinks from './nav-links'
import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt="logo"
        src={props.BrandingLogo}
        className="navbar-branding-logo"
      />
      <div className="navbar-nav-content">
        <NavLinks
          rootClassName="nav-links-root-class-name"
          className=""
        ></NavLinks>
        <a href="#packages" className="navbar-link">
          <div className="navbar-packages get-started">
            <span className="navbar-text">
              <span className="navbar-text1">Csomagok</span>
              <br className=""></br>
            </span>
          </div>
        </a>
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="navbar-image"
            />
            <div id="close-mobile-menu" className="navbar-container">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path
                  d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links">
            <span className="nav-link">h</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="navbar-text3">Get started</span>
          </div>
        </div>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image1"
          />
        </div>
      </div>
      <div className="">
        <div className="navbar-container2">
          <Script
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  link_text: 'https://example.com',
  text: 'Link',
  image_alt: 'image',
  image_src: '/Icons/hamburger-200h.png',
  Link: 'Why us',
  image_src1: 'https://i.imgur.com/92TCidp.png',
  image_alt1: 'image',
  rootClassName: '',
  BrandingLogo: 'https://i.imgur.com/92TCidp.png',
}

Navbar.propTypes = {
  link_text: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  Link: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
