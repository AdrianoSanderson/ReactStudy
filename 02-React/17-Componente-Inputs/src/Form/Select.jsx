import React from 'react'

function Select({ options, value, setValue }) {
    return (
        <select value={value} onChange={(event) => setValue(event.target.value)}>

            <option value="" disabled>Selecione</option>

            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
            
        </select>
    )
}

export default Select