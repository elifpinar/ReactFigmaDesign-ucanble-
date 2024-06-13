import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Stack } from '@mui/material';
import houseKeeping from './IconComponents/houseKeeping.png';
import valiz from './IconComponents/valiz.png';
import adamvaliz from './IconComponents/adamvaliz.png';

const RoomButton = ({ roomStatus, onClick }) => {
  let backgroundColor = 'white';
  let icon = null;

  if (roomStatus && roomStatus.length > 0) {
    const status = roomStatus[0];

    if (status.anySensorFault === 1) {
      backgroundColor = 'red';
      icon = valiz;
    } else if (status.anySensorFault === 2) {
      backgroundColor = 'red';
      icon = adamvaliz;
    } else if (status.rentedStatus === 0) {
      if (status.isHKinRoom === 1) {
        icon = houseKeeping;
      }
    } else if (status.rentedStatus === 1) {
      backgroundColor = 'green';
      if (status.isHKinRoom === 0) {
        if (status.occupiedStatus === 0) {
          icon = valiz;
        } else if (status.occupiedStatus === 1) {
          icon = adamvaliz;
        }
      } else if (status.isHKinRoom === 1) {
        icon = houseKeeping;
      }
    }
  }

  return (
    <Button 
      id="1" 
      variant="contained" 
      style={{ width: 200, height: 200, borderRadius: '10px', backgroundColor }} 
      onClick={onClick}
    >
      {icon && <img src={icon} alt="Icon" style={{ width: 50, height: 50 }} />}
    </Button>
  );
};

RoomButton.propTypes = {
  roomStatus: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default RoomButton;
