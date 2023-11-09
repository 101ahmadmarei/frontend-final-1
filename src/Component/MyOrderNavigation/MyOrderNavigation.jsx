import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import CoralBtn from '../CoralBtn/CoralBtn';

const Container = styled.div`
// width: 100%;
display:flex;
background-color:#F4F4F4;
border-radius: 15px;
padding: 10px 10px;
// gap: 20px;
`;

function MyOrderNavigation() {
  return (
    <Container>
        {/* <Typography component={'p'} sx={{backgroundColor:'primary.main'}}>Completed</Typography>
        <Typography component={'p'}>Processing</Typography>
        <Typography component={'p'}>Cancelled</Typography> */}
        <CoralBtn label={'Completed'} type={'contained'} />
        <CoralBtn label={'Processing'}/>
        <CoralBtn label={'Cancelled'}/>
    </Container>
  )
}

export default MyOrderNavigation