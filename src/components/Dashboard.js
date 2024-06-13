import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import data from './Alarms.json';
import HVACStatus from './HVACStatus';
import OccupancyRates from './OccupancyRates';
import ServiceRequest from './ServiceRequests';
import AlarmStatus from './AlarmStatus';

const Dashboard = () => {
  return (
    <Card sx={{ backgroundColor: '#616161', color: 'white', margin: 'auto', width: '80%', mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom sx={{ backgroundColor: '#4C4B4D', padding: 1 }}>
        Dashboard
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box mb={2} sx={{ display: 'flex', flexDirection: 'column' }}>
              <OccupancyRates />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={2} sx={{ display: 'flex', flexDirection: 'column' }}>
              <ServiceRequest />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={2} sx={{ display: 'flex', flexDirection: 'column' }}>
              <AlarmStatus />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={2} sx={{ display: 'flex', flexDirection: 'column' }}>
              <HVACStatus />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
