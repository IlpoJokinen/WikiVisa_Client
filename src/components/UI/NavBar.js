import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div>
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
            {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  } 
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    }
  }

export default function VerticalNavBar() {
    const classes = useStyles()
    const [value, setValue] = useState(0)
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
  
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Play" {...a11yProps(0)} />
          <Tab label="Statistics" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
          <Tab label="Sign In / Sign Up" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        Play
        </TabPanel>
        <TabPanel value={value} index={1}>
        Statistics
        </TabPanel>
        <TabPanel value={value} index={2}>
        Profile
        </TabPanel>
        <TabPanel value={value} index={3}>
        Sign In / Sign Up
        </TabPanel>
      </div>
    )
  }
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      width: 250,
      height: 1000,
      color: '#fff'
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }))
