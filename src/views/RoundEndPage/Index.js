import React from 'react'
import AnswerInfoBox from '../../components/UI/AnswerInfoBox'
import { Grid, withStyles, Container, makeStyles } from '@material-ui/core/'
import RoundEndPlayerList from "./components/RoundEndPlayerList.js"

const CustomGridItem = withStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
}))(Grid)

const RoundEndView = ({answers, gamertag, timer, correctAnswer, players}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        standings: {
            textAlign: 'center',
        },
        button: {
            marginBottom: theme.spacing(2)
        },
        gridTest: {
            [theme.breakpoints.down('sm')]: {
                marginTop: '50px'
            },
            [theme.breakpoints.up('md')]: {
                marginTop: '80px'
            }
        },
    }))
    const classes = useStyles()

    function getBackgroundColor() {
        let backgroundColor = ""
        if(correctAnswer.value === answers[gamertag].value) {
            backgroundColor = "#60FA9F"
        } else if (answers[gamertag].noAnswer) {
            backgroundColor = '#879DFA'
        } else {
            backgroundColor = "#EB7972"
        }
        return backgroundColor
    }

    return <Grid container style={{height: '100%'}}>
        <CustomGridItem style={{backgroundColor: getBackgroundColor(), color: '#ffffff'}} item xs={12} md={7}>
            <Container maxWidth="xs" className={classes.gridTest}>
                <AnswerInfoBox gamertag={gamertag} answers={answers} correctAnswer={correctAnswer} timer={timer}/>
            </Container>
        </CustomGridItem>
        <CustomGridItem item xs={12} md={5}>
            <Container maxWidth="xs" className={classes.gridTest}>
                <RoundEndPlayerList gamertag={gamertag} players={players}/>
            </Container>
        </CustomGridItem>
    </Grid>                    
}
export default RoundEndView