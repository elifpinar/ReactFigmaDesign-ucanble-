import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Button} from  '@mui/material';



// Blok butonunu oluşturan fonksiyon
function BlockButton({ blockNo, onClick }) {
    return (
        <Button className="block-button" onClick={onClick} variant="contained" size="large">
            Kat {blockNo}
        </Button>
    );
}

// Odaları listeleme bileşeni
function RoomList({ rooms }) {
    return (
        <div>
            {rooms.map(room => (
                <p key={room.oda_no}>Oda No: {room.oda_no}</p>
            ))}
        </div>
    );
}

// PageOne bileşeni
function KatPage(props) {
    const [selectedBlock, setSelectedBlock] = useState(null);
    const { state } = useLocation();
    const navigate = useNavigate();
    

    // Blok butonuna tıklandığında seçilen bloğu ayarla
    const handleOnClick = (odalar) => {
        navigate('/oda',{state:odalar});
    };

    return (
        <div>

            {(
                <div>
                    {state.map(kat => (
                        <div key={kat.kat_no}>
                            <h3>Kat {kat.kat_no}</h3>
                            <BlockButton
                                key={kat.kat_no}
                                katNo={kat.kat_no}
                                onClick={() => handleOnClick(kat.odalar)}
                            />
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default KatPage;
