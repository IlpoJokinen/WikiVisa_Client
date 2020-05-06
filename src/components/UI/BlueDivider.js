import React from 'react'
import Box from '@material-ui/core/Box'

const BlueDivider = props => {
    let textCenter = props.hasOwnProperty('textCenter') ? 'center' : 'left'
    return <Box className="blueDivider" style={{textAlign: textCenter}}>
        { props.children }
    </Box>
}

export default BlueDivider