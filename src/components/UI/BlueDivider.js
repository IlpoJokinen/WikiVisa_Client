import React from 'react'
import Box from '@material-ui/core/Box'

const BlueDivider = props => {
    return <div className="blueDivider"><Box m={2}>{ props.children }</Box></div>
}

export default BlueDivider