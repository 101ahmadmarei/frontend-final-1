import React, { useState } from 'react';
import styled from 'styled-components';
import Quantity from './Quantity';
import Divider from '@mui/material/Divider';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import { ReactComponent as Wishlist } from '../../static/icons/wishlist.svg';
import { ReactComponent as Outline } from '../../static/icons/outline.svg';
import { Box, Modal, Rating, Stack, SvgIcon, Typography } from '@mui/material';
import { useRetriveData } from '../../API/getRetriveData';
import { useNavigate, useParams } from 'react-router-dom';
// import { MutateAddToCart } from '../../API/addToCart';
import { useCookies } from 'react-cookie';
import { addToCart } from '../../API/addToCart';




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
  padding-Top:30px;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1B4B66',
  boxShadow: 24,
  p: 4,
};

export default function Details({ product }) {

  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [cookies, setCookie,removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  // const addToCartMutation = MutateAddToCart();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigateLogin = () => {
    navigate('/login');
  }

  const handleAddToCart = () => {

    // removeCookie('token',{path:'/'});

    console.log(cookies.token);
    if (cookies.token) {
      addToCart(product.id, cookies.token, { "order_quantity": value })
        .then((result) => {
          if(result === 'Unauthorized' ){
            removeCookie('token',{path:'/'})
            handleOpen()
          }else{
            navigate('/myCart')
          }
          console.log('result:',result);
        })
    } else {
      handleOpen()
    }
  }

  return (
    <div>
      {product &&
        <DetailsContainer key={product.id}>
          <Description>
            <div className='coach'>{product.name}</div>
            <div className='leather'>{product.description}</div>
          </Description>

          <Rate>
            <Stack spacing={1}>
              <Rating name="read-only" value={Number(product.avg_rate)} readOnly defaultValue={2} size="large" />
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
              <Quantity value={value} setValue={setValue}></Quantity>
            </div>
          </QuantityContainer>

          <br />

          <ButtonContainer>
            <div style={{ width: 328 }}>
              <CoralBtnIcon
                label={"Add to cart"}
                type={"contained"}
                color={"primary"}
                endIcon={<SvgIcon><Outline /></SvgIcon>}
                click={handleAddToCart} />
            </div>
            <div style={{ width: 240 }}><CoralBtnIcon label={"Add to wishlist"} type={"outlined"} Icon={<SvgIcon> <Wishlist></Wishlist>  </SvgIcon>} /></div>
          </ButtonContainer>
        </DetailsContainer>
      }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hello Hello! 
          </Typography>
          <Typography id="modal-modal-description" sx={{display:'flex', mt: 2 }}>
           please &nbsp; <Typography color={'primary'} sx={{fontWeight:800}} onClick={handleNavigateLogin}> login </Typography>&nbsp; or &nbsp;<Typography color={'primary'}> you don't have an account? </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

