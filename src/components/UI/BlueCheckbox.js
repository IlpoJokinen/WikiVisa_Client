import React from 'react'

const BlueCheckbox = props => {
    return <div className="checkboxButton">
        <input onClick={props.onClick} type="checkbox" id={props.name} />
        <label htmlFor={props.name}>{ props.label }</label>
    </div>
}

export default BlueCheckbox