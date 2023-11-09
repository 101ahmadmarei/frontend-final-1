import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
background-color:#F4F4F4;
border-radius: 15px;
padding: 5px 50px 5px 10px;
margin-top: 10px;
`;

function OrderTableRow() {
  return (
    <Container>
         <FormControlLabel control={<Checkbox />} label="#874556556" sx={{width:'80px'}}/>
         <Typography sx={{width:'80px'}}>Septemper 5, 2020</Typography>
         <Typography sx={{width:'80px'}}>$218.50</Typography>
         <Typography sx={{width:'80px'}}>Paid</Typography>
         <Typography sx={{width:'80px'}}><ArrowForwardIosIcon sx={{width:18, height:18}}/></Typography>

    </Container>
  )
}

export default OrderTableRow