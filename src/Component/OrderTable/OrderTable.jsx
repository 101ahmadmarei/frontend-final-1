import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import OrderTableRow from '../OrderTableRow/OrderTableRow';

const Container = styled.div`
width: 100%;
margin-top: 20px;
`;

const TableHeader = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #0000001F;
padding: 5px 50px 5px 10px;
`;

function OrderTable() {
  return (
    <Container>
        <TableHeader>
            <Typography component={'p'} color={'textGray.main'} sx={{width:'80px'}}>Order ID</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{width:'80px'}}>Date</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{width:'80px'}}>Price</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{width:'80px'}}>Status</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{width:'80px'}}> </Typography>
        </TableHeader>
        <OrderTableRow/>
        <OrderTableRow/>
        <OrderTableRow/>
        <OrderTableRow/>
    </Container>
  )
}

export default OrderTable