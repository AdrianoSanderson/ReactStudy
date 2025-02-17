import React from 'react'

function Radio( {options, value, setValue} ) {
  return (
    <>
        {options.map((option) =>(
            <label key={option}>
                <input type="radio" value={option} checked={value === option} onChange={(event) => setValue(event.target.value)}/>
                {option}
            </label>
        ))}
    </>
  )
}

export default Radio