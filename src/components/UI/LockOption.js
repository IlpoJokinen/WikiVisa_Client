import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const LockOption = ({ locked, setLocked, setReady }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            color: '#879DFA',
            fontFamily: 'IBM Plex Sans',
            border: '2px solid #A3B4FF',
            marginTop: '20px',
            padding: '8px 20px',
        }
        },
      }));

      const classes = useStyles();


      const divStyle = {
          textAlign: 'center'
      }

      if(locked) {
          return (
            <div style={divStyle} className={classes.root}>
                <Button style={{pointerEvents: "none"}} variant="outlined">Submitted!</Button>
            </div>
          )
      } else {
          return (
            <div style={divStyle} className={classes.root}>
                <Button onClick={() => {setLocked(true); setReady()}} variant="outlined">Sumbit Answer</Button>
            </div>
          )
      }
}

export default LockOption
