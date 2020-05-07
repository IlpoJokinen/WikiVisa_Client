import React, { useState } from 'react'
import { Grid, withStyles, Container, TextField, Button, makeStyles } from '@material-ui/core/'
import { Build, DoubleArrow, Search } from '@material-ui/icons/'
import Header from '../../components/UI/Header'

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

const WelcomePage = ({setView, setGamertag, gamertag, createGame}) => {
    const [tag, setTag] = useState("")
    const useStyles = makeStyles((theme) => ({
        button: {
            marginBottom: theme.spacing(2)
        },
        gridTest: {
            [theme.breakpoints.down('sm')]: {
                marginTop: '50px',
                marginBottom: '50px'
            },
            [theme.breakpoints.up('md')]: {
                marginTop: '80px'
            }
        },
    }))
    const classes = useStyles()
    return <Grid container style={{height: 'calc(100% - 64px)'}}>
        <CustomGridItem style={{backgroundColor: '#879DFA', color: '#ffffff'}} item xs={12} md={7}>
            <Container maxWidth="xs" className={classes.gridTest}>
                <Grid container>
                    <Grid xs={12} item>
                        <Header white size={1}>Welcome to WikiQuiz!</Header>
                    </Grid>
                    <Grid xs={12} item>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </Grid>
                </Grid>
            </Container>
        </CustomGridItem>
        <CustomGridItem item xs={12} md={5}>
            <Container maxWidth="xs" className={classes.gridTest}>
                <Grid container spacing={3}>
                    <Grid xs={12} item>
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                                <Header size={2}>Set Your Gamertag</Header>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField value={tag} label={gamertag ? "Your gamertag is set" : "Give Gamertag" } variant="outlined" fullWidth onChange={e => setTag(e.target.value)} />
                            </Grid>
                            <Grid xs={12} item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    className={classes.button}
                                    onClick={() => setGamertag(tag)}
                                >Set Gamertag</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} item>
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                                <Header size={2}>How would you like to play?</Header>
                            </Grid>
                            <Grid xs={12} item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    className={classes.button}
                                    onClick={() => createGame({type: 'quick'})}
                                    startIcon={<DoubleArrow />}
                                >Quick Game</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    className={classes.button}
                                    onClick={() => setView('play_find')}
                                    startIcon={<Search />}
                                >Find Game</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    className={classes.button}
                                    onClick={() => setView('play_create')}
                                    startIcon={<Build />}
                                >Create Game</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </CustomGridItem>
    </Grid>
}

export default WelcomePage