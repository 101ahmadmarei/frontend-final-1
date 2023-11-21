import React from 'react'
import ItemTable from '../../Component/itemTable/ItemTable'
import Summary from '../../Component/summary/Summary'
import './myCartPage.css'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import PageHeader from '../../Component/pageHeader/PageHeader'
import { useMyCart } from '../../API/getMyProducts'
import CoralBtn from '../../Component/CoralBtn/CoralBtn'
import { useNavigate } from 'react-router-dom'
import { MutatePlaceOrder } from '../../API/placeOrder'

const MyCartContainer = styled.div`
padding: 30px;
`;

const MyCart = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 30px;
`;

const FlexContainer = styled.div`
display:flex;
gap:10px;
`;

const Container = styled.div`
position:relative;
`;
function MycartPage() {

  const navigate = useNavigate();
  const placeOrderMutation = MutatePlaceOrder();
  const myProductsQuery = useMyCart();

  const handleContinueShoping = () => {
    navigate('/')
  }

  const handlePlaceOrder = () => {
    // console.log(myProductsQuery.data?.data?.[0].id);
    if(myProductsQuery.data?.data != undefined){
      placeOrderMutation.mutate({"orderId": myProductsQuery.data?.data?.[0].id , "data": {"status":"completed"}});
      navigate('/checkout')
    }
    // placeOrderMutation.mutate()
  }

  return (
    <>
      <MyCartContainer>
        <PageHeader title={'My Cart'} />
        <MyCart>
          <ItemTable />
          <div style={{width:'30%'}}>
            <Summary />

            <FlexContainer>
              <CoralBtn label={'Place Order'} type={'contained'} click={handlePlaceOrder}/>
              <CoralBtn label={'Continue Shoping'} type={'outlined'} click={handleContinueShoping}/>
            </FlexContainer>

          </div>
        </MyCart>

      </MyCartContainer>
    </>
  )
}

export default MycartPage