import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import NavMenu from '../Navbar/Navigation';
import NavDrawer from '../Navbar/NavDrawer';

const mdTheme = createTheme();

function WrapperContent() {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <NavDrawer />

        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          
         {/* MAIN CONTENT WILL GO HERE */}

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function NavWrapper() {
  return <WrapperContent />;
}
