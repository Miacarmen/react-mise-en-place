import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

// import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const LightButton = {
  mt: '3px',
  mb: '2px',
  color: 'black',
  backgroundColor: 'lightsalmon',
  '&:hover': {
    backgroundColor: 'salmon',
  },
};


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='absolute'
          open={open}
          sx={{ backgroundColor: 'lightsalmon' }}
        >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Button
              edge='start'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                color: 'black',
                backgroundColor: 'pink',
                '&:hover': {
                  backgroundColor: 'salmon',
                },
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              Open Menu
            </Button>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Mise En Place
            </Typography>

            {/* NOTIFICATION ICON */}
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                {/* <NotificationsIcon /> */}
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* DRAWER */}
        <Drawer
          variant='permanent'
          open={open}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              backgroundColor: 'pink',
            }}
          >
            {/* TO-DO: onClick change nav links to icons */}
            <Button onClick={toggleDrawer} sx={LightButton}>
              Close Menu
            </Button>
          </Toolbar>
          <Divider />

          {/* NAV MENU */}
          <List component='nav'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <MenuItem style={{ paddingLeft: 10, color: 'black' }}>Home</MenuItem>
            </Link>
            <Divider sx={{ my: 1 }} />
            <Link to='/Dashboard' style={{ textDecoration: 'none' }}>
              <MenuItem style={{ paddingLeft: 10, color: 'black' }}>Dashboard</MenuItem>
            </Link>
            <Divider sx={{ my: 1 }} />
            <Link to='/Calendar' style={{ textDecoration: 'none' }}>
              <MenuItem style={{ paddingLeft: 10, color: 'black' }}>Calendar</MenuItem>
            </Link>
            <Divider sx={{ my: 1 }} />
            <Link to='/Checklist' style={{ textDecoration: 'none' }}>
              <MenuItem style={{ paddingLeft: 10, color: 'black' }}>Checklist</MenuItem>
            </Link>
            <Divider sx={{ my: 1 }} />
            <Link to='/Logout' style={{ textDecoration: 'none' }}>
              <MenuItem style={{ paddingLeft: 10, color: 'black' }}>Logout</MenuItem>
            </Link>
          </List>
        </Drawer>
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
          <Typography
            sx={{
              fontWeight: 'light',
              fontSize: 'h5.fontSize',
              align: 'center',
              textAlign: 'center',
              mt: '20px',
              color: 'gray',
            }}
          >
            Dashboard
          </Typography>
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              {/* CALENDAR */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  Calendar
                </Paper>
              </Grid>

              {/* UPCOMING TO-DOS */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  Upcoming To-Dos
                </Paper>
              </Grid>

              {/* CHECKLISTS */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  Checklists
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
