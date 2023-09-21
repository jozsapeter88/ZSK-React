import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import Mark1 from './mark1'
import Mark3 from './mark3'
import './package1.css'

const Package1 = (props) => {
  const [isTurned1, setIsTurned1] = useState(false)
  return (
    <div className="package1-package1">
      <div className="cardBorder">
        <div className="package1-details">
          <div className="package1-header">
            <label className="package1-name">{props.Name}</label>
          </div>
        </div>
        <div className="package1-buy-details">
          <div className="package1-features">
            <span className="package1-heading">{props.Heading}</span>
            <div className="package1-list">
              <Includes
                Label="Pénzvisszatéritési garancia"
                rootClassName="includes-root-class-name29"
              ></Includes>
              <Includes rootClassName="includes-root-class-name30"></Includes>
              <Mark1></Mark1>
              <Mark3></Mark3>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsTurned1(!isTurned1)}
          className="package1-check button"
        >
          <span className="package1-text">
            <span className="package1-text1">Megnézem</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="package1-plan-back">
        <div className="package1-details1">
          <div className="package1-header1">
            <label className="package1-name1">{props.Name1}</label>
          </div>
        </div>
        <div className="package1-buy-details1">
          <div className="package1-features1">
            <span className="package1-heading1">{props.Heading1}</span>
            <div className="package1-list1">
              <Includes
                Label="Pénzvisszatéritési garancia"
                rootClassName="includes-root-class-name33"
              ></Includes>
              <Includes rootClassName="includes-root-class-name34"></Includes>
              <Mark1></Mark1>
              <Mark3></Mark3>
            </div>
          </div>
        </div>
        <div className="package1-check1 button">
          <span className="package1-text3">
            <span className="package1-text4">Megnézem</span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

Package1.defaultProps = {
  Name1: 'Ping-Gold',
  Heading: 'Tartalmazza:',
  Heading1: 'Tartalmazza:',
  Name: 'Ping-Silver',
}

Package1.propTypes = {
  Name1: PropTypes.string,
  Heading: PropTypes.string,
  Heading1: PropTypes.string,
  Name: PropTypes.string,
}

export default Package1
