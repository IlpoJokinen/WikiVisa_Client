import React from 'react'

const Header = props => {
    let styles = {
        color: props.hasOwnProperty('white') ? '#ffffff' : '#879DFA', 
        display: props.hasOwnProperty('inline') ? 'inline' : 'initial'
    }
    if(props.hasOwnProperty('style')) {
        styles = Object.assign({}, styles, props.style)
    }
    const HeadingValue = `h${props.size}`
    return <HeadingValue style={styles}>{props.children}</HeadingValue>
}

export default Header