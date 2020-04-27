import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AnswerInfoBox from './UI/AnswerInfoBox'
import StandingsRow from './UI/StandingsRow'

const RoundEndView = () => {
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
        }
    }));

    const classes = useStyles();

    const [ correctAnswer, setCorrectAnswer ] = useState('Helsinki')

    return (
        <div>
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <AnswerInfoBox correctAnswer={correctAnswer}/>
                </Grid>
                <Grid item xs={12}>
                    <StandingsRow rank={1} pointsAdded={10}/>
                    <StandingsRow rank={2} pointsAdded={8}/>
                    <StandingsRow rank={3} pointsAdded={6}/>
                    <StandingsRow rank={4} pointsAdded={4}/>
                    <StandingsRow rank={5} pointsAdded={2}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default RoundEndView
