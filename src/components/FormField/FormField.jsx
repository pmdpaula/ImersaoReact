import React from 'react';

export default (props) => {
  const {
    label,
    type,
    fieldType,
    name,
    value,
    onChange
  } = props

  const createField = () => {
    if ( fieldType === 'textarea' ) {
      return (
        <textarea
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={label}
        />
      )
    }
    else {
      return (
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={label}
        />
      )
    }
  }

  return (
    <div>
      <label >
        {label}:
        {createField()}
      </label>
    </div>
  )
}