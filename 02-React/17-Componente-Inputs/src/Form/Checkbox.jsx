import React from 'react'

function Checkbox({ options, value, setValue }) {
    function handleChange(event) {
        if(event.target.checked) {
            setValue([...value, event.target.value])
        } else {
            setValue(value.filter((option) => option !== event.target.value))
        }
    }
    return (
        <>
            {options.map((options) => (
                <label key={options}>
                    <input type="checkbox" value={options} onChange={handleChange} checked={value.includes(options)}/>
                    {options}
                </label>
            ))}
        </>
    )
}

export default Checkbox