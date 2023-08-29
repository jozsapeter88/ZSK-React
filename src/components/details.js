import React from 'react'

import PropTypes from 'prop-types'

import './details.css'

const Details = (props) => {
  return (
    <div className="details-details">
      <div className="details-header">
        <label className="details-name">{props.Name}</label>
      </div>
    </div>
  )
}

Details.defaultProps = {
  Name: 'Silver-Pong',
}

Details.propTypes = {
  Name: PropTypes.string,
}

export default Details
