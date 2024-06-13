import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box, ThemeProvider, createTheme } from '@mui/material';
import data from './Alarms.json'; // JSON dosyasını içe aktarın
import lighting from './AlarmStatusIcon/lighting.png';
import hvac from './AlarmStatusIcon/hvac.png';
import rcu from './AlarmStatusIcon/rcu.png';
import door from './AlarmStatusIcon/door.png';
import pms from './AlarmStatusIcon/pms.png';
import emerg from './AlarmStatusIcon/emerg.png';

const AlarmStatus = () => {
  const [alarmData, setAlarmData] = useState({});

  useEffect(() => {
    setAlarmData(data.alarmStatus); // JSON verilerini state'e aktar
  }, []);

  const alarmLabels = [
    { label: 'Lighting', key: 'lightingAlarmNumber', icon: lighting, ackKey: 'lightingAckNumber' },
    { label: 'HVAC', key: 'hvacAlarmNumber', icon: hvac, ackKey: 'hvacAckNumber' },
    { label: 'RCU', key: 'rcuAlarmNumber', icon: rcu, ackKey: 'rcuAckNumber' },
    { label: 'Door Sys', key: 'doorSystemAlarmNumber', icon: door, ackKey: 'doorAckNumber' },
    { label: 'PMS', key: 'pmsAlarmNumber', icon: pms, ackKey: 'pmsAckNumber' },
    { label: 'Emergency', key: 'emergencyAlarmNumber', icon: emerg, ackKey: 'emergencyAckNumber' }
  ];

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
          Alarm Status
        </Typography>
        <CardContent>
          <Grid container spacing={3} justifyContent="center">
            {alarmLabels.map((alarm, index) => (
              <Grid item xs={4} key={index} display="flex" justifyContent="center">
                <Box position="relative">
                  <Button
                    variant="contained"
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: '16px', 
                      backgroundColor: alarmData[alarm.key] > 0 ? '#E72636' : '#49796B',
                      color: 'white',
                      border: '0.5px solid grey', // Beyaz çizgi (kalınlık 1px)
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        backgroundColor: alarmData[alarm.key] > 0 ? '#E72636' : '#49796B', // Üzerine gelindiğinde rengi değiştirme
                        boxShadow: 'none' // Gölgeyi kaldırma
                      }
                    }}
                  >
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ textTransform: 'none' }} // Büyük harfleri devre dışı bırakma
                    >
                      {alarm.label}
                    </Typography>
                    <img src={alarm.icon} alt={`${alarm.label} icon`} style={{ width: 35, height: 40, marginBottom: 3 }} />
                  </Button>
                  {alarmData[alarm.key] > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: '#E72636',
                        color: 'white',
                        border: '1px solid grey', // gri çizgi
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        boxShadow: 3
                      }}
                    >
                      {alarmData[alarm.key]}
                    </Box>
                  )}
                  {alarmData[alarm.ackKey] > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -10,
                        right: -10,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        color: '#E72636',
                        border: '1px solid grey', // gri çizgi
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        boxShadow: 3
                      }}
                    >
                      {alarmData[alarm.ackKey]}
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default AlarmStatus;
