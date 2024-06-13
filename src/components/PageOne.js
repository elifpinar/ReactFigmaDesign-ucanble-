import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from  '@mui/material';

// Blok butonunu oluşturan fonksiyon
function BlockButton({ blockNo, onClick }) {
  return (
    <Button className="block-button" onClick={onClick}  variant="contained" size="large">
      Blok {blockNo}
    </Button>
   
  );
}

// Odaları listeleme bileşeni



// PageOne bileşeni
function PageOne(props) {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const navigate = useNavigate();
  const handleOnClick = (katlar) => {
    navigate('/kat',{state:katlar});
  }



  return (
    <div>
      {/* Blok butonlarını oluştur */}
      {props.jsonData.bloklar.map(blok => (
        <BlockButton 
          key={blok.blok_no} 
          blockNo={blok.blok_no} 
          onClick={() => handleOnClick(blok.katlar)}
        />
      ))}

      
      
    </div>
  );
}

export default PageOne;
