import React from 'react'
import classNames from 'classnames'

import './Divider.css'

const Divider = ({ light, type }) => (
  <div
    className={classNames('divider', {
      [`divider--${type}`]: type,
      'divider--light': light,
    })}
  />
)

export default Divider
