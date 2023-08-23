import React from 'react'

import PropTypes from 'prop-types'

import './mark2.css'

const Mark2 = (props) => {
  return (
    <div className={`mark2-mark ${props.rootClassName} `}>
      <div className="mark2-icon"></div>
      <p className="mark2-label">{props.Label}</p>
    </div>
  )
}

Mark2.defaultProps = {
  Label: 'Duis aute irure dolor in reprehenderit',
  rootClassName: '',
}

Mark2.propTypes = {
  Label: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Mark2
