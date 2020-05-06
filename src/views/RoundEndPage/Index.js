import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import AnswerInfoBox from '../../components/UI/AnswerInfoBox'
import StandingsRow from '../../components/UI/StandingsRow'

const RoundEndView = ({answers, gamertag, timer, correctAnswer}) => {

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
    }))
    const classes = useStyles()
    return <Grid container>
        <Grid item xs={12}>
            <AnswerInfoBox correctAnswer={correctAnswer} timer={timer}/>
        </Grid>
        <Grid item xs={12}>
            <StandingsRow rank={1} pointsAdded={10}/>
            <StandingsRow rank={2} pointsAdded={8}/>
            <StandingsRow rank={3} pointsAdded={6}/>
            <StandingsRow rank={4} pointsAdded={4}/>
            <StandingsRow rank={5} pointsAdded={2}/>
        </Grid>
    </Grid>
}

export default RoundEndView