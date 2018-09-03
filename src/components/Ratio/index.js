import React from 'react'

import './Ratio.css'

const Ratio = ({ children, ratio }) => {
  const paddingBottom = ratio * 100 + '%'
  return (
    <div className="ratio" style={{ paddingBottom }}>
      <div className="ratio-inner">{children}</div>
    </div>
  )
}

Ratio.defaultProps = {
  ratio: 1,
}

export default Ratio
