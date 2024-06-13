import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button,
  Box, Stack, TextField, InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import houseKeeping from './IconComponents/houseKeeping.png';
import LightingActive from './IconComponents/LightingActive.png';
import AnyLightingActive from './IconComponents/AnyLightingActive.png';
import HvacActive from './IconComponents/HvacActive.png';
import HvacActiveCold from './IconComponents/HvacActiveCold.png';
import HvacActiveHot from './IconComponents/HvacActiveHot.png';
import searchicon from './IconComponents/searchicon.png';
import dnd from './IconComponents/dnd.png';
import dndyellow from './IconComponents/dndyellow.png';
import lnd from './IconComponents/lnd.png';
import lndyellow from './IconComponents/lndyellow.png';
import lndDelayed from './IconComponents/lndDelayed.png';
import mur from './IconComponents/mur.png';
import muryellow  from './IconComponents/muryellow.png';
import murDelayed from './IconComponents/murDelayed.png';
import redadamvaliz from './IconComponents/redadamvaliz.png';
import redvaliz from './IconComponents/redvaliz.png';
import greenadamvaliz from './IconComponents/greenadamvaliz.png';
import greenhousekeeping from './IconComponents/greenhousekeeping.png'
import greenvaliz from './IconComponents/greenvaliz.png';
import white from './IconComponents/white.png';
import whitehousekeeping from './IconComponents/whitehousekeeping.png';



const ModalItem = ({ onClick, buttonText1, buttonText2, title, content, number, roomStatus, highlight }) => (
  <Box sx={{ backgroundColor: highlight ? '#555' : '#3A3939', padding: 2 ,borderRadius: '10px'}}>
    <Box position="relative" display="inline-block">
      <Button id="1" variant="contained" style={{ width: 200, height: 200, borderRadius: '10px' , background:'transparent'  }} onClick={onClick} >
      <img  src={ 
          roomStatus && roomStatus.length > 0 ? 
          (
              roomStatus[0].isHKinRoom  === "0" ? 
              white : 
              roomStatus[0].isHKinRoom  === "1" ? 
              whitehousekeeping : 
              roomStatus[0].isHKinRoom  === "2" ? 
              greenvaliz : 
              roomStatus[0].isHKinRoom  === "3" ? 
              greenadamvaliz : 
              roomStatus[0].isHKinRoom  === "4" ? 
              greenhousekeeping : 
              roomStatus[0].isHKinRoom  === "5" ? 
              redvaliz : 
              roomStatus[0].isHKinRoom  === "6" ? 
              redadamvaliz : 

              null
          ) 
          : null
        } 
        alt="Icon" 
        style={{ width: 200, height: 200, cursor: 'pointer' }} 
        onClick={onClick}
      />
      </Button>
     

      <Stack
  direction="row"
  spacing={0.5}
  justifyContent="center"
  style={{
    position: 'absolute',
    top: '0%',
    left: '0%',
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // Şeffaf arka plan
    padding: '2px',
    borderRadius: '16px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600', //yazı kalınlığı
    fontSize: '24px',
  }}
>
  {number}
</Stack>

      <Stack
        direction="row"
        spacing={0.5}
        justifyContent="center"
        style={{
          position: 'absolute',
          top: "-10%",
          right: "-20%",
          backgroundColor: 'transparent',
          padding: '2px',
          borderRadius: '8px'
        }}
      >
        <img id="2" src={roomStatus && roomStatus.length > 0 ? 
          (roomStatus[0].isAnyLightingActive === "1" ? LightingActive : AnyLightingActive) 
          : null} 
          alt="Icon" 
          style={{ width: 50, height: 50, cursor: 'pointer' }} 
          onClick={onClick}
        />

        <img  src={
          roomStatus && roomStatus.length > 0 ? 
          (
              roomStatus[0].isHvacActive === "0" ? 
              HvacActive : 
              roomStatus[0].isHvacActive === "1" ? 
              HvacActiveCold : 
              roomStatus[0].isHvacActive === "2" ? 
              HvacActiveHot : 
              null
          ) 
          : null
        } 
        alt="Icon" 
        style={{ width: 50, height: 50, cursor: 'pointer' }} 
        onClick={onClick}
      />
      </Stack>

      <Stack
        direction="row"
        spacing={0.5}
        justifyContent="center"
        style={{
          position: 'absolute',
          bottom: "-5%",
          right: "-10%",
          backgroundColor:'rgba(0, 0, 0, 0.8)',
          padding: '2px',
          borderRadius: '8px'
        }}
      >
        
        <img id="dnd" src={roomStatus && roomStatus.length > 0 ? 
          (roomStatus[0].isDndActive === "1" ? dndyellow  : dnd) 
          : null} 
          alt="Icon" 
          style={{ width: 40, height: 40, cursor: 'pointer' }} 
          onClick={onClick}
        />


<img id="lnd" src={roomStatus && roomStatus.length > 0 ? 
  (roomStatus[0].isLndDelayed === "1" ? lndDelayed : (roomStatus[0].isLndActive === "1" ? lnd : lndyellow))
  : null} 
  alt="Icon" 
  style={{ width: 40, height: 40, cursor: 'pointer' }} 
  onClick={onClick}
/>


<img id="mur" src={roomStatus && roomStatus.length > 0 ? 
  (roomStatus[0].isMurDelayed === "1" ? murDelayed : (roomStatus[0].isMurActive === "1" ? mur : muryellow))
  : null} 
  alt="Icon" 
  style={{ width: 40, height: 40, cursor: 'pointer' }} 
  onClick={onClick}
/>
      </Stack>
    </Box>
  </Box>
);

const MainModal3 = ({ data = [] }) => {
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openMainModal = () => setIsMainModalOpen(true);
  const closeMainModal = () => setIsMainModalOpen(false);
  const openSmallModal = () => setIsSmallModalOpen(true);
  const closeSmallModal = () => setIsSmallModalOpen(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ border: '2px solid black', padding: 2, position: 'relative', backgroundColor: '#3A3939' , borderRadius: '20px'}}>
    {/* Search bar kısmı */}
    <Box display="flex" justifyContent="flex-end" mb={1}>
      <TextField
        variant="outlined"
        placeholder="Room ID"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { borderRadius: 20 }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green',
          }
        }}
      />
    </Box>

      {/* ModalItem bileşenlerinin listesi */}
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
        {data.map(item => (
          <ModalItem
            key={item.oda_no}
            onClick={openMainModal}
            buttonText1="Btn 1"
            buttonText2="Btn 2"
            title="Main Modal"
            content="This is the main modal content."
            number={item.oda_no}
            roomStatus={item.roomStatus}
            highlight={searchTerm && item.oda_no.toString().includes(searchTerm)}
          />
        ))}
      </Box>

      {/* Ana modal */}
      <Dialog open={isMainModalOpen} onClose={closeMainModal}>
        <DialogTitle>Main Modal</DialogTitle>
        <DialogContent>
          <p>This is the main modal content. </p>
        </DialogContent>
        <DialogActions>
          <Button id="7" onClick={closeMainModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Küçük modal */}
      <Dialog open={isSmallModalOpen} onClose={closeSmallModal}>
        <DialogTitle>Small Modal</DialogTitle>
        <DialogContent>
          <p>This is the small modal content.</p>
        </DialogContent>
        <DialogActions>
          <Button id="8" onClick={closeSmallModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MainModal3;
