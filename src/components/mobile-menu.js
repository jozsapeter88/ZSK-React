import React from 'react'

import PropTypes from 'prop-types'

import './mobile-menu.css'

const MobileMenu = (props) => {
  return (
    <div id="mobile-menu" className="mobile-menu-mobile-menu">
      <div className="mobile-menu-branding">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="mobile-menu-image"
        />
        <div id="close-mobile-menu" className="mobile-menu-container">
          <svg viewBox="0 0 1024 1024" className="mobile-menu-icon">
            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </div>
      </div>
      <div className="mobile-menu-nav-links">
        <span className="nav-link">h</span>
        <span className="nav-link">Why us</span>
        <span className="nav-link">Prices</span>
        <span className="nav-link">Contact</span>
      </div>
      <div className="get-started">
        <span className="mobile-menu-text">Get started</span>
      </div>
    </div>
  )
}

MobileMenu.defaultProps = {
  image_src1: 'https://i.imgur.com/92TCidp.png',
  image_alt1: 'image',
}

MobileMenu.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default MobileMenu
