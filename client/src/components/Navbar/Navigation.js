import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import logo from '../../images/Logo.png';

// import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    
    <Box sx={{ width: '100%', backgroundColor: 'lightsalmon'}}>
      <Tabs>
      <img src={logo} alt='logo' height='90px' width='90px' />
        <Tab label="Home" style={{ fontWeight: 'bold' }} />
        <Tab label="Dashboard" style={{ fontWeight: 'bold' }} />
        <Tab label="Checklist" style={{ fontWeight: 'bold' }} />
        <Tab label="Calendar" style={{ fontWeight: 'bold' }} />
        <Tab label="Logout" style={{ fontWeight: 'bold' }} />
      </Tabs>
    </Box>
  
  );
};

export default Navigation;
