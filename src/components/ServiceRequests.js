import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';
import data from './Alarms.json'; // JSON dosyasını içe aktarın
import murblue from './IconComponents/murblue.png';
import lndy from './IconComponents/lndy.png';
import GaugeChart from 'react-gauge-chart';

const ServiceRequest = () => {
  const [occupancyData, setOccupancyData] = useState({ rentedOccupied: 0, rentedVacant: 0, odaSayisi: 0 });
  const [alarmData, setAlarmData] = useState(null);
  const [averageResponseTime, setAverageResponseTime] = useState(0);

  useEffect(() => {
    // JSON verisini yükle
    setOccupancyData(data.occupancyRate);
    setAlarmData(data.serviceRequest);
    if (data.serviceRequest && data.serviceRequest.averageResponceTime) {
      // averageResponceTime değerini al ve uygun formata dönüştür
      const [hours, minutes] = data.serviceRequest.averageResponceTime.split(':');
      const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
      const percent = totalMinutes / (24 * 60); // 24 saatlik bir zaman dilimine göre yüzdeyi hesapla
      setAverageResponseTime(percent);
    }
  }, []);

  const { murNumber, murOverdue, murInProgress, lnrNumber, lndOverdue, lndInProgress } = alarmData || {};

  return (
    <Card sx={{ backgroundColor: '#616161', color: 'white', width: 430, height:350,margin: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom sx={{ backgroundColor: '#4C4B4D', padding: 1 }}>
        Service Requests
      </Typography>
      <CardContent>
        {alarmData && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Stack direction="row" spacing={17} alignItems="flex-start">
              <Stack direction="row" spacing={3} alignItems="center">
                <img src={murblue} alt="MUR" style={{ width: 55, height: 75, marginLeft:12 }} />
                <Box>
                  <Chip label={murNumber} color="success" size="small" sx={{ borderRadius: '4px', backgroundColor: 'transparent',fontWeight: 'bold',fontSize: '16px' }} />
                  <Box textAlign="center" mt={0.5} >MUR</Box>
                </Box>
              </Stack>
              <Stack direction="column" spacing={1} alignItems="flex-end" textAlign="right" sx={{ ml: 4 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">Overdue:</Typography>
                  <Chip label={murOverdue} color="success" size="small" sx={{ borderRadius: '4px', backgroundColor: '#49796B', color: 'white' }} />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">In Progress:</Typography>
                  <Chip label={murInProgress} color="success" size="small" sx={{ borderRadius: '4px', backgroundColor: '#C75861', color: 'white' }} />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={17} alignItems="flex-start">
              <Stack direction="row" spacing={3} alignItems="center">
                <img src={lndy} alt="MUR" style={{ width: 56, height: 70, marginLeft:12 }} />
                <Box>
                  <Chip label={lnrNumber} color="success" size="small" sx={{ borderRadius: '4px', backgroundColor: 'transparent' ,fontWeight: 'bold' ,fontSize: '16px' }} />
                  <Box textAlign="center" mt={0.5}>LNDY</Box>
                </Box>
              </Stack>
              <Stack direction="column" spacing={1} alignItems="flex-end" textAlign="right" sx={{ ml: 4 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">Overdue:</Typography>
                  <Chip label={lndOverdue} size="small" sx={{ borderRadius: '4px', backgroundColor: '#49796B', color: 'white' }} />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">In Progress:</Typography>
                  <Chip label={lndInProgress} color="success" size="small" sx={{ borderRadius: '4px', backgroundColor: '#C75861', color: 'white' }} />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        )}
        <Stack direction="row" sx={{marginTop:'17px',marginLeft:'100px', display: 'flex', alignItems: 'flex-start', width: 280, height: 200  }}>
      <GaugeChart
        id="gauge-chart1"
        percent={averageResponseTime}
        arcPadding={0.01}
        colors={['#49796B', '#3CB389', '#C75861']}
        arcWidth={0.3}
        textColor={'#fff'}
        formatTextValue={(value) => `${value}%`}
        needleColor={'#fff'}
        needleBaseColor={'#fff'}
        
        hideText
        style={{ width: '180px', height: '180px', borderRadius: '0' }}
      />
          <Typography variant="body2" align="right"><b>{` ${data.serviceRequest.averageResponceTime}`}</b> Avg.Resp.Time</Typography>
      
    </Stack>
      </CardContent>
    </Card>
  );
};

export default ServiceRequest;
