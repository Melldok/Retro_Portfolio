import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import './work.css'
import { Typewriter } from 'react-simple-typewriter'
import calendar from '../../assets/images/calendar.png'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Work = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    
    <div className="work">
        <h2 style={{  margin: 'auto 0', paddingBottom: '20px', fontWeight: 'normal'}}>
        "Hello,{' '}
        <span style={{ color: 'white' }}>
          
          <Typewriter
            words={['Work"', 'Work"']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={1000}
            
            
          />
        </span>
      </h2>
    <Box
      sx={{ 
            width: 1, 
            bgcolor: 'background.paper', 
            display: 'flex', 
            height: '30vh',
            border: '3px solid black',
            boxShadow: '-5px 10px 0px 0px rgb(255, 255, 255)' }}
    >
      <Tabs
        orientation="vertical"
        variant='scrollable'
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{sx: {backgroundColor:'rgb(92, 195, 195)'}}}
        
        aria-label="VerticalTabs"
        sx={{ 
            borderRight: 1, 
            borderColor: 'rgb(92, 195, 195)',
            backgroundColor: 'black',
            fontWeight: 800,
            "& button" : {color: 'white', textTransform: 'none', fontFamily: 'IBM Plex Mono', marginTop: '10px'},
            "& button:focus" : {color: 'rgb(92, 195, 195)'},
            "& button:active" : {color: 'rgb(92, 195, 195)'},
            "& button.Mui-selected" : {color: 'rgb(92, 195, 195)'},
            "root" : {textTransform: 'none'}
            
         }}
      >
        <Tab label="Meeto" {...a11yProps(0)} />
        <Tab label="MyAgenda" {...a11yProps(1)} />
        <Tab label="Gastroventory" {...a11yProps(2)} />
        <Tab label="Hero.inc" {...a11yProps(3)} />
    
      </Tabs>
      <TabPanel value={value} index={0}>

        <div className="tablePanelDiv d-flex">
            <p className='tabPanelP'>
            MERN Stack based usable organization and calendar app with multiple users, day/month/year views and events. User Colors, Login Authentication, private and public routes, event CRUD with user permissions, JWT tokens and more
            <br /><br />
            <span className='techSpan'>Mongo, Express, Redux, Node.js</span>
            </p>
            <div className='mx-5'>
                <img src={calendar} className="projectPicture" alt="" />
                <div className='d-flex mt-3'>
                <a href="https://clinquant-rugelach-780bb9.netlify.app" target="_blank"><button className='buttonOnLight'>Deploy</button></a> 
                <button className='buttonOnLight mx-2'>StackBlitz</button>
                </div>
                
            </div>
            
        </div>

        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>

    </Box>
    </div>

 
  );
}