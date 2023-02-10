import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import './work.css'
import { Typewriter } from 'react-simple-typewriter'
import calendar from '../../assets/images/calendar.png'
import journal from '../../assets/images/journal.png'
import kitchen from '../../assets/images/kitchen.jpg'
import menthal from '../../assets/images/menthal.png'
import volunteer from '../../assets/images/volunteer.png'
import roomie from '../../assets/images/roomie.png'


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
    
    <div className="work " id='work'>
      <div className="containerWidth2">
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
            bgcolor: 'background.paper', 
            display: 'flex', 
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
        <Tab label="Menthal" {...a11yProps(3)} />
        <Tab label="Volunteer" {...a11yProps(4)} />
        <Tab label="Roomie" {...a11yProps(5)} />
    
      </Tabs>
      <TabPanel value={value} index={0}>
      
        <span className="tablePanelDiv d-flex">
            
            <span className='tabPanelP'>
            
            <span className='panelTitle'>{'> '}<strong>Dev</strong></span> <br /><br />

            MERN Stack based usable organization and calendar app with multiple users, day/month/year views and events. User Colors, Login Authentication, private and public routes, event CRUD with user permissions, JWT tokens and more
            <br /><br />
            <span className='techSpan'>Mongo, Express, Redux, Node.js</span>
            </span>
            <span className='mx-5'>
                <img src={calendar} className="projectPicture" alt="" />
                <span className='d-flex mt-3'>
                <a href="https://clinquant-rugelach-780bb9.netlify.app" target="_blank"><button className='buttonOnLight'>Deploy</button></a> 
                <a href="https://stackblitz.com/github/melldok/calendar_frontend" target={'_blank'}><button className='buttonOnLight mx-2'>StackBlitz</button></a>
                </span>
                
            </span>
            
        </span>

        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <span className="tablePanelDiv d-flex">
            <span className='tabPanelP'>
            <span className='panelTitle'>{'> '}<strong>Dev</strong></span> <br /><br />
             Journal app for taking notes with images, files and tracking. Authentication with firebase and Google, design with Material UI. Managed with Redux.
            <br /><br />
            <span className='techSpan'>React, Redux, Node.js</span>
            </span>
            <span className='mx-5'>
                <img src={journal} className="projectPicture" alt="" />
                <span className='d-flex mt-3'>
                <a href="https://github.com/Melldok/journal_app" target="_blank"><button className='buttonOnLight'>Repo</button></a> 
                </span>
                
            </span>
            
        </span>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <span className="tablePanelDiv d-flex">
        
            <span className='tabPanelP'>
            <span className='panelTitle'>{'> '}<strong>Dev</strong></span> <br /><br />
            Final Project for Harvard CS50. Inventory management app for restaurants with real time visual kitchen layout and storage organization filtered by colors and categories. It's a prototype of a vision that would include app management and finances with product usage trackers, since more than 70% of restaurants in Spain still use paper. 
            <br /><br />
            <span className='techSpan'>MySQL, React.</span>
            </span>
            <span className='mx-5'>
                <img src={kitchen} className="projectPicture" alt="" />
                <span className='d-flex mt-3'>
                <a href="https://github.com/Melldok/Inventory-Management/tree/main/inventory_management" target="_blank"><button className='buttonOnLight'>Repo</button></a> 
                </span>
                
            </span>
            
        </span>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <span className="tablePanelDiv d-flex">
        
            <span className='tabPanelP'>
            <span className='panelTitle'>{'> '}<strong>Case Study</strong></span> <br /><br />
              More than 200 participants were tested to create this app. It's a mental health hub application that connnects professionals with patients and makes easier to find help, since its a major concern in society, specially between young people where suicidal rates are so high and help resources are so hard to find. 
            <br /><br />
            <span className='techSpan'>Figma, Whimscal, Adobe stack</span>
            </span>
            <span className='mx-5'>
                <img src={menthal} className="projectPicture" alt="" />
                <span className='mt-3'>
                <a href="https://www.figma.com/file/dEDH1JAoJao35wCxQf5vY2/Menthal-app?node-id=1%3A5&t=CRB6V2hpib3GPEeA-1" target="_blank"><button className='buttonOnLight'>Figma File</button></a> 
                <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:73dbba8a-882d-3736-acd4-6e35443d0fab" target="_blank"><button className='buttonOnLight'>Research (Spanish)</button></a> 
                </span>
                
            </span>
            
        </span>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <span className="tablePanelDiv d-flex">
        
            <span className='tabPanelP'>
            <span className='panelTitle'>{'> '}<strong>UX/UI</strong></span> <br /><br />
            Volunteering app made like social media. It connects organizations and volunteers to make great impacts on their environments. You can search events by proximity or by categories, invite other friends, make comments, contribute and much more. 
            <br /><br />
            <span className='techSpan'>Figma, Adobe Stack.</span>
            </span>
            <span className='mx-5'>
                <img src={volunteer} className="projectPicture" alt="" />
                <span className='d-flex mt-3'>
                <a href="https://www.figma.com/file/Ajcr6cyy0bnDbpSTDZhGlw/Volunteer-app?node-id=0%3A1&t=4wb1OnGqmz4ZtV7b-1" target="_blank"><button className='buttonOnLight'>Figma File</button></a> 
                </span>
                
            </span>
            
        </span>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <span className="tablePanelDiv d-flex">
        
            <span className='tabPanelP'>
            <span className='panelTitle'>{'> '}<strong>UX/UI</strong></span> <br /><br />
              Appartment Sharing app made like a game. You have points that can be used to "buy" chores. Easiest ones are the most expensive. Chores that are not bought are randomized. Each week you can store or use your points so things at home are made in a fair way, but also a fun one!
            <br /><br />
            <span className='techSpan'>MySQL, React.</span>
            </span>
            <span className='mx-5'>
                <img src={roomie} className="projectPicture" alt="" />
                <span className='d-flex mt-3'>
                <a href="https://www.figma.com/file/3BrSrdWzcW41DJW6sOeAfm/Roomie-app-(Copy)?node-id=0%3A1&t=jXSW8Jyd303fN0eR-1" target="_blank"><button className='buttonOnLight'>Figma File</button></a> 
                </span>
                
            </span>
            
        </span>
      </TabPanel>


    </Box>
      </div>

    </div>

 
  );
}