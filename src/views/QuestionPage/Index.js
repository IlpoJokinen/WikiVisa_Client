import React, { useState, useEffect } from 'react'
import QuestionInfoBox from './components/QuestionInfoBox'
import AnswerOption from './components/AnswerOption'
import LockOption from './components/LockOption'
import { Grid, withStyles, Container, LinearProgress, makeStyles } from '@material-ui/core/'

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

const QuestionView = ({ setAnswer, timer, question, players, setReady, questionCount, questionIndex }) => {
    const [playersReady, setPlayersReady] = useState(0)
    const [locked, setLocked] = useState(false)
    const [answerGiven, setAnswerGiven] = useState(false)
    const useStyles = makeStyles((theme) => ({
        button: {
            marginBottom: theme.spacing(2)
        },
        gridTest: {
            [theme.breakpoints.down('sm')]: {
                marginTop: '50px',
                paddingBottom: '50px'
            },
            [theme.breakpoints.up('md')]: {
                marginTop: '80px'
            }
        },
    }))
    document.title = question.title.toString()

    useEffect(() => {
        let num = players.filter(p => p.ready === true).length
        setPlayersReady(num)
    }, [players])

    let answerOptionComponents = question.choices.map((choice, i) => {
        return <AnswerOption setAnswerGiven={setAnswerGiven} key={i} setAnswer={setAnswer} option={choice} value={i}/>
    })

    const classes = useStyles()

    return <Grid container style={{height: '100%'}}>
        <CustomGridItem style={{backgroundColor: '#879DFA', color: '#ffffff'}} item xs={12} md={7}>
            <Container maxWidth="xs" className={classes.gridTest}>
                <QuestionInfoBox timeRemaining={timer} questionIndex={questionIndex} question={question.title} questionCount={questionCount}/>
            </Container>
        </CustomGridItem>
        <CustomGridItem item xs={12} md={5}>
            <Container maxWidth="xs" className={classes.gridTest}>
                {answerOptionComponents}
                <LinearProgress variant="determinate" value={playersReady / players.length * 100} />
                <LockOption locked={locked} setLocked={setLocked} setReady={setReady} answerGiven={answerGiven}/>
            </Container>
        </CustomGridItem>
    </Grid>
}

export default QuestionView