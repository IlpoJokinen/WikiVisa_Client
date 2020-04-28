import React from 'react'
import Box from '@material-ui/core/Box'

const BlueDivider = props => {
    let textCenter = props.hasOwnProperty('textAlign') ? 'center' : 'left'
    return <div className="blueDivider"><Box m={2} style={{textAlign: textCenter}}>{ props.children }</Box></div>
}

export default BlueDivider