import React from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import './plan.css'

const Plan = (props) => {
  return (
    <div className="plan-plan">
      <div className="plan-details">
        <div className="plan-header">
          <label className="plan-name">{props.Name}</label>
        </div>
      </div>
      <div className="plan-buy-details">
        <div className="plan-features">
          <span className="plan-heading">{props.Heading}</span>
          <div className="plan-list">
            <Includes
              Label="Pénzvisszatéritési garancia"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Asztalitenisz tippek"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Átlagosan napi 4-5 tipp"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Oddsok 1.50 - 3.00 között"
              rootClassName="includes-root-class-name"
            ></Includes>
          </div>
        </div>
      </div>
      <div className="plan-buy button">
        <span className="plan-text">
          <span className="plan-text1">Megnézem</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

Plan.defaultProps = {
  Name: 'Silver-Pong',
  Heading: 'Tartalmazza:',
}

Plan.propTypes = {
  Name: PropTypes.string,
  Heading: PropTypes.string,
}

export default Plan
