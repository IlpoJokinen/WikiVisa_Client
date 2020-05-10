import React from 'react'

const Header = props => {
    let styles = {
        color: props.hasOwnProperty('white') ? '#ffffff' : '#879DFA', 
        display: props.hasOwnProperty('inline') ? 'inline' : 'initial'
    }
    if(props.hasOwnProperty('style')) {
        styles = Object.assign({}, styles, props.style)
    }
    const HeadingValue = `h${props.hasOwnProperty("size") ? props.size : 2}`
    return <HeadingValue style={styles}>{props.children}</HeadingValue>
}

export default Header