import React from 'react'
import ItemTable from '../itemTable/ItemTable'
import styled from 'styled-components'
import { Typography } from '@mui/material';
import OrderSummary from '../orderSummary/orderSummary';

const Container = styled.div`
width: 100%;
`;

const FlexStyle = styled.div`
display: flex;
justify-content:space-between;
`;

const InfoContainer = styled.div`
width: 25%
`;

function Order() {
    return (
        <Container>
            <ItemTable  showFunctions={false}/>
            <Typography component='p' sx={{fontWeight:600, width: '100%', borderBlockEnd: '1px solid', borderColor: 'secondary.main' }}>Order Information</Typography>
            
            <FlexStyle>
                <InfoContainer>
                    <Typography component={'p'} color={'textGray.main'}>Order Details</Typography>
                    <OrderSummary/>
                </InfoContainer>

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
    )
}

export default Order