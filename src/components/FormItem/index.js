import React from 'react'

import './FormItem.css'

const FormItem = ({ id, label, required, type, ...rest }) => {
  const El = type === 'textarea' ? 'textarea' : 'input'
  return (
    <div className={`form-item form-item-${id}`}>
      {label && (
        <label htmlFor={id} className="form-item-label">
          {label}
          {required && <span className="form-item-required">*</span>}
        </label>
      )}
      <El
        id={id}
        name={id}
        type={type}
        required={required}
        {...rest}
        className="form-item-input"
      />
    </div>
  )
}

FormItem.defaultProps = {
  type: 'text',
}

export default FormItem
