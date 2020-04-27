import React from 'react'
import Box from '@material-ui/core/Box'

const BlueDivider = props => {
    let textAlign = props.hasOwnProperty('textAlign') ? 'center' : 'left'
    return <div className="blueDivider"><Box m={2} style={{textAlign: textAlign}}>{ props.children }</Box></div>
}

export default BlueDivider