import React, { useState } from 'react'
import QuestionInfoBox from '../../components/UI/QuestionInfoBox'
import AnswerOption from '../../components/UI/AnswerOption'
import LockOption from '../../components/UI/LockOption'
import Grid from '@material-ui/core/Grid';

const QuestionView = () => {
    const [ answer, setAnswer ] = useState()
    const [ locked, setLocked ] = useState(false)

    return <Grid container spacing={12}>
        <Grid item xs={12}>
            <QuestionInfoBox timeRemaining={4} number={1} question="What is the capital of finland?"/>
        </Grid>
        <Grid item xs={12}>
            <div>
                <AnswerOption setAnswer={setAnswer} option='Stockholm'/>
                <AnswerOption setAnswer={setAnswer} option='Belgrade'/>
                <AnswerOption setAnswer={setAnswer} option='Helsinki'/>
                <AnswerOption setAnswer={setAnswer} option='New York City'/>
                <LockOption locked={locked} setLocked={setLocked}/>
            </div>
        </Grid>
    </Grid>
}

export default QuestionView