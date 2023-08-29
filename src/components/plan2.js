import React from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import './plan2.css'

const Plan2 = (props) => {
  return (
    <div className="plan2-plan">
      <div className="plan2-details">
        <div className="plan2-header">
          <label className="plan2-name">{props.Name}</label>
        </div>
      </div>
      <div className="plan2-buy-details">
        <div className="plan2-features">
          <span className="plan2-heading">{props.Heading}</span>
          <div className="plan2-list">
            <Includes
              Label="Pénzvisszatítési garancia"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Túlnyomórészt asztalitenisz tippek"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Átlagosan napi 1 tipp"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Oddsok 1.50 - 2.50 között"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Legkésőbb 13:00-ig küldjük"
              rootClassName="includes-root-class-name"
            ></Includes>
          </div>
        </div>
      </div>
      <div className="plan2-buy button">
        <span className="plan2-text">
          <span className="plan2-text1">Megnézem</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

Plan2.defaultProps = {
  Name: 'Safety-Days',
  Heading: 'Tartalmazza:',
}

Plan2.propTypes = {
  Name: PropTypes.string,
  Heading: PropTypes.string,
}

export default Plan2
