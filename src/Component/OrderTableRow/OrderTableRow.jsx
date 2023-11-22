import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router';
import IconBtn from '../IconBtn/IconBtn';

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
background-color:#F4F4F4;
border-radius: 15px;
padding: 5px 50px 5px 10px;
margin-top: 10px;
`;

function OrderTableRow({order}) {

  const navigate = useNavigate();

  const handleOrderNavigate = () => {
    navigate(`/personalInformation/order/${order.id}`)
  }
  return (
    <Container>
         <FormControlLabel control={<Checkbox />} label={order.id} sx={{width:'80px'}}/>
         <Typography sx={{width:'80px'}}>{order.created_at}</Typography>
         <Typography sx={{width:'80px'}}>${order.price}</Typography>
         <Typography sx={{width:'80px'}}>{order.status}</Typography>
         {/* <Typography sx={{width:'80px'}} onClick={handleOrderNavigate} ></Typography> */}
         <IconBtn icon={<ArrowForwardIosIcon sx={{width:18, height:18}}/>} click={handleOrderNavigate}/>

    </Container>
  )
}

// Septemper 5, 2020
export default OrderTableRow