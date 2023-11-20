import React, { useState } from 'react';
import styled from 'styled-components';
import Quantity from './Quantity';
import Divider from '@mui/material/Divider';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import { ReactComponent as Wishlist } from '../../static/icons/wishlist.svg';
import { ReactComponent as Outline } from '../../static/icons/outline.svg';
import { Rating, Stack, SvgIcon } from '@mui/material';
import { useRetriveData } from '../../API/getRetriveData';
import { useParams } from 'react-router-dom';




const DetailsContainer = styled.div`
  padding-left: 24px;
  
`;

const Description = styled.div`
  .coach {
    color: #13101E;
    font-size: 34px;
    font-weight: 600;
    line-height: 44px;
  }

  .leather {
    color: #626262;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;

  .how-many-rate {
    color: #B6B6B6;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .stars {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    .orange {
      width: 24px;
      height: 24px;
    }
  }
`;

const ProductPricing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding-top: 24px;

  .big {
    color: #171520;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
  }

  .medium {
    color: #B6B6B6;
    text-align: right;
    font-size: 34px;
    font-weight: 600;
    line-height: 26px;
    text-decoration: line-through;
  }

  .small {
    color: #FF404B;
    text-align: right;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

const QuantityContainer = styled.div`
  padding-top: 162px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .quantity {
    color: #13101E;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  padding-Top:186px;
`;

export default function Details() {

  const { id } = useParams();
  const RetriveQuery = useRetriveData(id);

  if (RetriveQuery.isLoading)
    return <div>Loading...</div>
  if (RetriveQuery.error) {
    return <div>{RetriveQuery.error.message}</div>
  }
  const products = RetriveQuery.data.data.products;
  console.log(products);
  return (
    <div>
      {products && products.map((product) => (
        <DetailsContainer key={product.id}>
          <Description>
            <div className='coach'>{product.name}</div>
            <div className='leather'>{product.description}</div>
          </Description>

          <Rate>
            <Stack spacing={1}>
              <Rating name="read-only" value={product.avg_rate} readOnly defaultValue={2} size="large" />
            </Stack>

            <div className='how-many-rate'>({product.count_rate}) Ratings</div>
          </Rate>

          <ProductPricing>
            <div className='big'>{`$${product.price}`}</div>
            <div className='medium'>{`$${product.price}`}</div>
            <div className='small'>{`${product.discount}% OFF`}</div>
          </ProductPricing>

          <Divider />
          <br />
          <QuantityContainer>
            <div className='quantity'>Quantity:</div>
            <div className='quantityplus'>
              <Quantity></Quantity>
            </div>
          </QuantityContainer>

          <br />

          <ButtonContainer>
            <div style={{ width: 328 }}> <CoralBtnIcon label={"Add to cart"} type={"contained"} color={"primary"} endIcon={<SvgIcon><Outline /></SvgIcon>} /></div>
            <div style={{ width: 240 }}><CoralBtnIcon label={"Add to wishlist"} type={"outlined"} Icon={<SvgIcon> <Wishlist></Wishlist>  </SvgIcon>} /></div>
          </ButtonContainer>
        </DetailsContainer>
      ))}
    </div>
  );
};

