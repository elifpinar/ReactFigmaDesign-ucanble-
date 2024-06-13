import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NestedAccordion() {
  const [expandedItem1, setExpandedItem1] = useState(false);
  const [expandedItem2, setExpandedItem2] = useState(false);

  const handleAccordion1Click = () => {
    setExpandedItem1(!expandedItem1);
  };

  const handleAccordion2Click = () => {
    setExpandedItem2(!expandedItem2);
  };

  return (
    <div>
      <Accordion expanded={expandedItem1} onChange={handleAccordion1Click}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <ExpandMoreIcon
            style={{
              transform: expandedItem1 ? 'rotate(270deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
          Item 1
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <ExpandMoreIcon />
              Item 1.1
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary aria-controls="panel1aa-content" id="panel1aa-header">
                  <ExpandMoreIcon />
                  Item 1.1.1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel1ab-content" id="panel1ab-header">
                  <ExpandMoreIcon />
                  Item 1.1.2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel1ac-content" id="panel1ac-header">
                  <ExpandMoreIcon />
                  Item 1.1.3
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel1b-content" id="panel1b-header">
              <ExpandMoreIcon />
              Item 1.2
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary aria-controls="panel1ba-content" id="panel1ba-header">
                  <ExpandMoreIcon />
                  Item 1.2.1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel1bb-content" id="panel1bb-header">
                  <ExpandMoreIcon />
                  Item 1.2.2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel1bc-content" id="panel1bc-header">
                  <ExpandMoreIcon />
                  Item 1.2.3
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel1c-content" id="panel1c-header">
              <ExpandMoreIcon />
              Item 1.3
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary aria-controls="panel1ca-content" id="panel1ca-header">
                  <ExpandMoreIcon />
                  Item 1.3.1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel1cb-content" id="panel1cb-header">
                  <ExpandMoreIcon />
                  Item 1.3.2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel1cc-content" id="panel1cc-header">
                  <ExpandMoreIcon />
                  Item 1.3.3
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedItem2} onChange={handleAccordion2Click}>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <ExpandMoreIcon
            style={{
              transform: expandedItem2 ? 'rotate(270deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
          Item 2
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
              <ExpandMoreIcon />
              Item 2.1
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary aria-controls="panel2aa-content" id="panel2aa-header">
                  <ExpandMoreIcon />
                  Item 2.1.1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2b-content" id="panel2b-header">
              <ExpandMoreIcon />
              Item 2.2
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary aria-controls="panel2ba-content" id="panel2ba-header">
                  <ExpandMoreIcon />
                  Item 2.2.1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2c-content" id="panel2c-header">
              <ExpandMoreIcon />
              Item 2.3
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary aria-controls="panel2ca-content" id="panel2ca-header">
                  <ExpandMoreIcon />
                  Item 2.3.1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel2cb-content" id="panel2cb-header">
                  <ExpandMoreIcon />
                  Item 2.3.2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary aria-controls="panel2cc-content" id="panel2cc-header">
                  <ExpandMoreIcon />
                  Item 2.3.3
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
