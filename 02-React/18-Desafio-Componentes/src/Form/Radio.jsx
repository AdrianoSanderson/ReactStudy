import React from 'react'

function Radio({ pergunta, options, id, onChange, value, active }) {
    if(active === false) return null

    return (
        <fildset>
            <legend>{pergunta}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        id={id}
                        checked={option === value}
                        value={option}
                        onChange={onChange} />
                    {option}
                    <br />
                </label>
            ))}
        </fildset>
    )
}

export default Radio