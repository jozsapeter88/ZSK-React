import React from 'react'

import PropTypes from 'prop-types'

import './mark3.css'

const Mark3 = (props) => {
  return (
    <div className="mark3-mark">
      <div className="mark3-icon">
        <svg viewBox="0 0 1024 1024" className="mark3-icon1">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
      </div>
      <label className="mark3-label">{props.Label}</label>
    </div>
  )
}

Mark3.defaultProps = {
  Label: 'Oddsok 1.50 - 3.00 között',
}

Mark3.propTypes = {
  Label: PropTypes.string,
}

export default Mark3
