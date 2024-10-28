import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainModal2 from './MainModal2';
import {Button} from  '@mui/material';


// Blok butonunu oluşturan fonksiyon
function BlockButton({ blockNo, onClick }) {
    return (
        <Button className="block-button" onClick={onClick}>
            Blok {blockNo}
        </Button>
    );
}

// Odaları listeleme bileşeni
function RoomList({ rooms }) {
    return (
        <div>


             <MainModal2 data={rooms} style ={{width: 100, height: 100,}}></MainModal2> 


        </div>
    );
}

// PageOne bileşeni
function OdaPage(props) {
    const [selectedBlock, setSelectedBlock] = useState(null);
    const { state } = useLocation();
    

    return (
        <div>



            {(
               <div>
                <div>
                    <RoomList rooms={state} />


                </div>
                </div>
            )}
        </div>
    );
}

export default OdaPage;
