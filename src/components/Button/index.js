import React from 'react'
import classNames from 'classnames'
import Link from 'gatsby-link'

import './Button.css'

const Button = ({ children, href, to, type, ...rest }) => {
  const El = to ? Link : href ? 'a' : 'button'
  return (
    <El
      className={classNames('button', {
        [`button--${type}`]: type,
      })}
      to={to}
      href={href}
      {...rest}
    >
      {children}
    </El>
  )
}

export default Button
