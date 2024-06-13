import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function NestedAccordion() {
  const [expandedItems, setExpandedItems] = useState({});
  const blocks = ['A Blok', 'B Blok'];
  const floors = ['1. Kat', '2. Kat', '3. Kat'];
  const rooms = ['1. Oda', '2. Oda', '3. Oda'];

  const handleAccordionClick = (index) => {
    setExpandedItems((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };
  const renderAccordion = (item, index) => (
    <Accordion
      key={item}
      expanded={expandedItems[index]}
      onChange={() => handleAccordionClick(index)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}-content`}
        id={`panel${index + 1}-header`}
      >
        <ExpandMoreIcon />
        {item}
      </AccordionSummary>
      <AccordionDetails>
        {renderFloors(index)}
      </AccordionDetails>
    </Accordion>
  );
  const renderFloors = (blockIndex) => (
    <>
      {floors.map((floor, index) => (
        <Accordion key={`${blocks[blockIndex]} ${floor}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${blockIndex}-${index + 1}-content`}
            id={`panel${blockIndex}-${index + 1}-header`}
          >
            <ExpandMoreIcon />
            {`${blocks[blockIndex]} ${floor}`}
          </AccordionSummary>
          <AccordionDetails>
            {renderRooms(blockIndex, index)}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
  const renderRooms = (blockIndex, floorIndex) => (
    <>
      {rooms.map((room, index) => (
        <Accordion key={`${blocks[blockIndex]} ${floors[floorIndex]} ${room}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${blockIndex}-${floorIndex}-${index + 1}-content`}
            id={`panel${blockIndex}-${floorIndex}-${index + 1}-header`}
          >
            <ExpandMoreIcon />
            {`${blocks[blockIndex]} ${floors[floorIndex]} ${room}`}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
  return (
    <div>
      {blocks.map((block, index) => renderAccordion(block, index))}
    </div>
  );
}
