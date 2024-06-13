import React from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import data from './Alarms.json';
import murwhite from './IconComponents/murwhite.png';
import delaywhite from './IconComponents/delaywhite.png';
import lndywhite from './IconComponents/lndywhite.png';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const RoomServicesPie = () => {
  const { murNumber, laundryNumber, delayNumber } = data.roomServices;

  const chartData = [
    { name: 'Mur', value: murNumber, icon: murwhite },
    { name: 'Laundry', value: laundryNumber, icon: lndywhite },
    { name: 'Delay', value: delayNumber, icon: delaywhite },
  ];

  const COLORS = ['#49796B', '#A8C5DA', '#C75861'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, icon }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.6; // Decrease this value to move labels closer
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <image
          x={x - 12} // Adjust the position of the icon
          y={y - 12} // Adjust the position of the icon
          xlinkHref={icon}
          width={20}
          height={20}
        />
        <text
          x={x} // Center the text horizontally
          y={y + 18} // Move the text below the icon
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontSize: 14 }}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'grey.700', borderRadius: 1 }}>
        <PieChart width={250} height={250}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            stroke={0}
            fill="#8884d8"
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) =>
              renderCustomizedLabel({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                percent,
                icon: chartData[index].icon,
              })
            }
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <Box sx={{ ml: 2 }}>
          {chartData.map((entry, index) => (
            <Box key={`legend-${index}`} sx={{ display: 'flex', alignItems: 'center', mb: 1,  marginRight:8 }}>
              <Box sx={{ width: 8, height: 8, backgroundColor: COLORS[index], borderRadius: '50%', mr: 1 }}></Box>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', minWidth: 70 }}>
                {`${entry.name} `}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' , fontSize:15}}>
                {entry.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RoomServicesPie;
