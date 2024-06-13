import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Box, ThemeProvider, createTheme } from '@mui/material';
import data from './Alarms.json'; 
import adam from './IconComponents/adam.png';

const drawPieChart = (canvas, data, colors) => {
  const ctx = canvas.getContext('2d');
  const total = data.reduce((sum, { value }) => sum + value, 0);
  let startAngle = 0;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 70;
  const innerRadius = 42; // İç radyus

  data.forEach((slice, index) => {
    const sliceAngle = (slice.value / total) * 2 * Math.PI;
    const paddingAngle = 0.05; // Padding açısı
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle - paddingAngle);
    ctx.closePath();
    ctx.fillStyle = colors[index];
    ctx.fill();
    startAngle += sliceAngle;
  });

  // İç daireyi çiz
  ctx.beginPath();
  ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = '#616161';
  ctx.fill();
};

const OccupancyRates = () => {
  const [occupancyData, setOccupancyData] = useState({ rentedOccupied: 0, rentedVacant: 0, odaSayisi: 0, unrented: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    // JSON verisini yükle
    setOccupancyData(data.occupancyRate);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const { rentedOccupied, rentedVacant, odaSayisi, unrented } = occupancyData;

      const pieData = [
        { name: 'Rented & Occupied', value: rentedOccupied },
        { name: 'Rented & Vacant', value: rentedVacant },
        { name: 'Unrented', value: unrented }
      ];

      const colors = ['#5A6E65', '#A8C6CF', '#616161']; 
      drawPieChart(canvasRef.current, pieData, colors);
    }
  }, [occupancyData]);

  const { rentedOccupied, rentedVacant, odaSayisi, unrented } = occupancyData;
  const occupancyRate = (((rentedOccupied + rentedVacant) / odaSayisi) * 100).toFixed(2);

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
          Occupancy Rates
        </Typography>
        <CardContent>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <canvas ref={canvasRef} width="200" height="150" />
            <img src={adam} alt="Adam" style={{ width: 30, height: 70 }} />
            <Box textAlign="center">
              <Typography variant="h6" sx={{ color: '#78B6C2', fontWeight: 'bold' }}>
                {occupancyRate}%
              </Typography>
              <Typography variant="body2">{rentedOccupied + rentedVacant}/{odaSayisi}</Typography>
            </Box>
          </Box>
          <Box mt={2}>
            <Box display="flex" justifyContent="space-between" px={2}>
              <Box display="flex" alignItems="center">
                <Box width={10} height={10} borderRadius="50%" bgcolor="#5A6E65" mr={1} />
                <Typography variant="body2" >Rented & Occupied</Typography>
              </Box>
              <Typography variant="body2">{rentedOccupied}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" px={2} mt={1}>
              <Box display="flex" alignItems="center">
                <Box width={10} height={10} borderRadius="50%" bgcolor="#A8C6CF" mr={1} />
                <Typography variant="body2" >Rented & Vacant</Typography>
              </Box>
              <Typography variant="body2">{rentedVacant}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" px={2} mt={1}>
              <Box display="flex" alignItems="center">
                <Box width={10} height={10} borderRadius="50%" bgcolor="white" mr={1} />
                <Typography variant="body2" >Unrented</Typography>
              </Box>
              <Typography variant="body2">{unrented}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default OccupancyRates;
