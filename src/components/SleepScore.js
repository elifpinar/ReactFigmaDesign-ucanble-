import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import data from './Alarms.json'; // JSON dosyasını bu şekilde içe aktarabilirsiniz
import staricon from './IconComponents/staricon.png'; // Star iconunu içe aktarıyoruz
import sleepscoreicon from './IconComponents/sleepscoreicon.png'; // Sleep score iconunu içe aktarıyoruz

const SleepScore = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // JSON dosyasındaki sleepScore değerini okuma
    const sleepScore = data.sleepScore.sleepSorePuan;
    setValue(sleepScore);
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', backgroundColor: 'grey.700', p: 2, borderRadius: 1, width: 220, height: 110 }}>
      <img src={staricon} alt="star icon" style={{ width: 90, height: 90, marginRight: 10 }} />
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{
          marginTop: -6,
          marginLeft: 1,
          '& .MuiRating-iconFilled': {
            color: '#FFD55B',
          },
          '& .MuiRating-iconHover': {
            color: '#FFD55B',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // İçeriği dikey hizalar
          alignItems: 'center',
          position: 'absolute',
          bottom: 24, 
          right: 20,
          p: 0.5,
          borderRadius: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={sleepscoreicon} alt="sleep score icon" style={{ width: 30, height: 20, marginRight: 5, color: '#FFD55B' }} />
          <span style={{ color: '#FFD55B' }}>{value}</span>
          <span style={{ color: '#FFFFFF' }}>/5</span>
        </Box>
        <span style={{ color: '#FFFFFF' }}>Sleep Score</span> {/* Sleep Score metni beyaz renkte */}
      </Box>
    </Box>
  );
};

export default SleepScore;
