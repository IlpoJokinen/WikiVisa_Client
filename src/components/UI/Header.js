import React from 'react'

const Header = props => {
    let color = props.hasOwnProperty('white') ? '#ffffff' : '#879DFA',
        inline = props.hasOwnProperty('inline') ? 'inline' : 'initial'
    const HeadingValue = `h${props.size}`
    return <HeadingValue style={{color: color, display: inline}}>{props.children}</HeadingValue>
}

export default Header