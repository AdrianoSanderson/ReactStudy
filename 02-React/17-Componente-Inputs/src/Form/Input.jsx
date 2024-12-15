import React from 'react'

function inputs({ label, id, value, setValue, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        {...props}
      />
    </div>
  )
}

export default inputs