import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box, ThemeProvider, createTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar'; 
import data from './Alarms.json';
import sun from './AlarmStatusIcon/sun.png'; 
import HvacActiveCold from './IconComponents/HvacActiveCold.png';
import HvacActiveHot from './IconComponents/HvacActiveHot.png';
import HvacActive from './IconComponents/HvacActive.png';

const HVACStatus = () => {
  const [hvacStatus, setHvacStatus] = useState({
    hvacCoolingNumber: 0,
    hvacHeatingNumber: 0,
    hvacOffNumber: 0,
    odaSayisi: 0
  });

  useEffect(() => {
    setHvacStatus(data.hvacStatus);
  }, []);

  // HVAC durumlarının yüzde olarak hesaplanması
  const coolingPercentage = (hvacStatus.hvacCoolingNumber / hvacStatus.odaSayisi) * 100;
  const heatingPercentage = (hvacStatus.hvacHeatingNumber / hvacStatus.odaSayisi) * 100;
  const offPercentage = (hvacStatus.hvacOffNumber / hvacStatus.odaSayisi) * 100;

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins', // Eklemek istediğiniz font
        'Arial', // Diğer fontlar
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ backgroundColor: '#616161', color: 'white', width: 430, height: 350, margin: 'auto' }}>
        <Typography variant="h6" align="center" gutterBottom sx={{ backgroundColor: '#4C4B4D', padding: 1 }}>
          HVAC Status
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            {/* Sol stack */}
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column">
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Avatar src={HvacActiveCold} sx={{ marginRight: 2 }} />
                  <Typography variant="body1" sx={{ marginRight: 27 }}>Cooling</Typography>
                  <Typography variant="body1">{coolingPercentage.toFixed()}/100</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Avatar src={HvacActiveHot} sx={{ marginRight: 2 }} />
                  <Typography variant="body1" sx={{ marginRight: 27 }}>Heating</Typography>
                  <Typography variant="body1">{heatingPercentage.toFixed()}/100</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={HvacActive} sx={{ marginRight: 2 }} />
                  <Typography variant="body1" sx={{ marginRight: 32 }}>Off</Typography>
                  <Typography variant="body1">{offPercentage.toFixed()}/100</Typography>
                </Box>
              </Box>
            </Grid>
            {/* Sağ stack */}
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
              {/* Sağ stack içeriği */}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2, marginLeft:25 }}>
              <img src={sun} alt="Sun Icon" style={{ marginRight: 10, width: 35 }} />
              <Typography variant="body1">Temsili Hava Durumu</Typography>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default HVACStatus;
