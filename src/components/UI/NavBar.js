import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import PlayPage from '../PlayPage'
import SignIn from '../SignIn'
import CreateGame from '../views/LandingPage/CreateGame'

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

export default function VerticalNavBar({createGame}) {
    const [value, setValue] = useState(0)
    const [checked, setChecked] = useState(false)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return (
      <div style={navBar}>
        <Tabs
          style={{marginTop: 80}}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab label="Play" {...a11yProps(0)} style={{marginTop: 20}}></Tab>
          <Tab label="Statistics" {...a11yProps(1)} style={{marginTop: 20}}/>
          <Tab label="Profile" {...a11yProps(2)} style={{marginTop: 20}}/>
          <Tab label="Sign In / Sign Up" {...a11yProps(3)} style={{marginTop: 20}}/>
        </Tabs>
        <TabPanel value={value} index={0} style={{marginLeft: -25, marginTop: -25, marginRight: -25}}>
          <PlayPage createGame={createGame}/>
        </TabPanel>
        <TabPanel value={value} index={3} style={{marginLeft: -25, marginTop: -25, marginRight: -25}}>
          <SignIn checked={checked} setChecked={setChecked}/>
        </TabPanel>
      </div>
    )
  }
const navBar = {
  flexGrow: 1,
  display: 'flex',
  height: '100vh',
  color: '#fff',
  backgroundColor: '#6674AD',
  marginBottom: -100
}

