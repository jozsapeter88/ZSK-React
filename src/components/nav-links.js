import React from 'react'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className={`nav-links-nav-links ${props.rootClassName} `}>
      <a href="#about" className="nav-links-link nav-link">
        Rólunk
      </a>

      <a href="#forwho" className="nav-links-link2 nav-link">
        <span className="">Kinek ajánljuk?</span>
        <br className=""></br>
      </a>
      <a href="#faq" className="nav-links-link3 nav-link">
        GYIK
      </a>
    </div>
  )
}

NavLinks.defaultProps = {
  rootClassName: '',
}

NavLinks.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavLinks
