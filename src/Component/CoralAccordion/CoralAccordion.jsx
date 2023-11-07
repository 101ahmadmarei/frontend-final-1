import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import './CoralAccordion.css'

function CoralAccordion({ summary, details }) {
    return (
        <div>
            <Accordion style={{ border: 'none', boxShadow: 'none', borderRadius: 0 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ borderBlockEnd: '1px solid #f1f1f1', margin: 0 }}
                >
                    <h2 style={{ fontWeight: 600, fontSize: 18, margin: 0 }}>{summary}</h2>
                    {/* <Typography variant='h2' style={{fontWeight:600, fontSize:18, margin:0,padding:0}}>Add new address</Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                    {details}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CoralAccordion