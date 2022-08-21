import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Components
import Wrapper from '../components/Container/page-wrapper';
// import Cal from '../components/Calendar/CalComp';

const Calendar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Wrapper />

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
            mb: '4px',
          }}
        >
          Calendar
        </Typography>
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {/* <Cal /> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {/* </Wrapper> */}
      </Box>
    </Box>
  );
};

export default Calendar;
