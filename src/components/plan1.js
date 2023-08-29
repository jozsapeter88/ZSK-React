import React from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import './plan1.css'

const Plan1 = (props) => {
  return (
    <div className={`plan1-plan ${props.rootClassName} `}>
      <div className="plan1-details">
        <div className="plan1-header">
          <label className="plan1-name">{props.Name}</label>
        </div>
      </div>
      <div className="plan1-buy-details">
        <div className="plan1-features">
          <span className="plan1-heading">{props.Heading}</span>
          <div className="plan1-list">
            <Includes
              Label="Pénzvisszatéritési garancia"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes rootClassName="includes-root-class-name"></Includes>
            <Includes
              Label="Átlagosan napi 3 tipp"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Oddsok 1.40 - 3.00 között"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Tippmesterünk általi napi/heti formaelemzés"
              rootClassName="includes-root-class-name"
            ></Includes>
            <Includes
              Label="Tippek beküldési idejének meghatározása"
              rootClassName="includes-root-class-name"
            ></Includes>
          </div>
        </div>
      </div>
      <div className="plan1-buy button">
        <span className="plan1-text">
          <span className="plan1-text1">Megnézem</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

Plan1.defaultProps = {
  Heading: 'Tartalmazza:',
  rootClassName: '',
  Name: 'Ping-Gold',
}

Plan1.propTypes = {
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
  Name: PropTypes.string,
}

export default Plan1
