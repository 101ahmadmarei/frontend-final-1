import React from 'react';
import ItemTable from '../itemTable/ItemTable';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useOrderDetails } from '../../API/getOrdersDetails';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
`;

const FlexStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  width: 25%;
`;

function Order() {
    const { orderId } = useParams();
    const { isLoading, isError, data, error } = useOrderDetails(orderId);
    console.log('Data:', data);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching order details: {error.message}</p>;
    }



    return (
        <Container>
            <ItemTable showFunctions={false} />
            <Typography component='p' sx={{ fontWeight: 600, width: '100%', borderBlockEnd: '1px solid', borderColor: 'secondary.main' }}>Order Information</Typography>

            <FlexStyle>
                {data.map((order) => (
                    <InfoContainer key={order.id}>
                        <Typography component={'p'} color={'textGray.main'}>Order Details</Typography>
                        <Typography component={'p'}>Order ID: {order.id}</Typography>
                        <Typography component={'p'}>Sub Total: {order.total_price}</Typography>
                        <Typography component={'p'}>Discount: {order.total_discount}</Typography>
                        <Typography component={'p'}>Delivery Fee: {order.delivery_fees}</Typography>
                        <Typography component={'p'}>Grand Total: {order.grand_total}</Typography>
                    </InfoContainer>
                ))}

                <InfoContainer>
                    <Typography component={'p'} color={'textGray.main'}>Payment Details</Typography>
                    <Typography component={'p'} >Cash on Delivery</Typography>
                </InfoContainer>

                <InfoContainer>
                    <Typography component={'p'} color={'textGray.main'}>Address Details</Typography>
                    <Typography component={'p'} >Nablus</Typography>
                    <Typography component={'p'} >Palestine</Typography>
                    <Typography component={'p'} >Street</Typography>
                    <Typography component={'p'} >059999999</Typography>
                </InfoContainer>
            </FlexStyle>
        </Container>
    );
}

export default Order;

