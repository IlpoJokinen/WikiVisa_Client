import React, { useState, useEffect } from 'react'
import QuestionInfoBox from '../../components/UI/QuestionInfoBox'
import AnswerOption from '../../components/UI/AnswerOption'
import LockOption from '../../components/UI/LockOption'
import Grid from '@material-ui/core/Grid';

const QuestionView = ({ setAnswer, timer, question, players, setReady  }) => {
    const [playersReady, setPlayersReady] = useState(0)
    const [ locked, setLocked ] = useState(false)
    document.title = question.title.toString()

    let answerOptionComponents = question.choices.map((choice, i) => {
        return <AnswerOption key={i} setAnswer={setAnswer} option={choice}/>
    })

    if(locked === true) {
        setReady()
    }
   
    return <Grid container spacing={10}>
        <Grid item xs={12}>
            <QuestionInfoBox timeRemaining={timer} number={1} question={question.title}/>
        </Grid>
        <Grid item xs={12}>
            <div>
                {answerOptionComponents}
                <LockOption locked={locked} setLocked={setLocked}/>
            </div>
        </Grid>
    </Grid>
}

export default QuestionView