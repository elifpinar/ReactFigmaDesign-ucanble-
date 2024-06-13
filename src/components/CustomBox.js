import React from 'react';
import Box from '@mui/material/Box';
import MainModal2 from './MainModal2';

const CustomBox = ({ children, ...props }) => {
  return (
    <Box sx={{ backgroundColor: '#333', padding: 2 }} {...props}>
      {children}
      
    </Box>
  );
};

export default CustomBox;