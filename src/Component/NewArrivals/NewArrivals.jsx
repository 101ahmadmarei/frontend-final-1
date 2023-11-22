import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CoralCard from '../Card/CoralCard';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../API/getNewArrivals';


const NewArrivalscontainer = styled.div`
padding: 0 20px;
max-width: 1440px;
margin:auto;
`;

const NewArrivalsHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const CardContainer = styled.div`
margin-top:10px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
@media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NewArrivals = () => {

    const arrivalsQuery = useProducts('/products?new_arrivals=true&offset=0&limit=4');
    const navigate = useNavigate();


    const handleNavigation = () => {
        navigate("/products?new_arrivals=true&offset=0&limit=20&type=NewArrivals");
    }

    if (arrivalsQuery.isLoading) return <div style={{textAlign:'center'}}><CircularProgress /> </div>
    if (arrivalsQuery.error) {
      return <div>{arrivalsQuery.error.message}</div>
    }

    return (
        <NewArrivalscontainer>
            <NewArrivalsHeader>
                <Typography sx={{fontSize:{xs:'18px',sm:'28px'}, fontWeight:600, color:'secondary.contrastText'}}>New Arrivals</Typography>
                <div><CoralBtnIcon label={'View All'} type={'text'} color={'primary'} endIcon={<ArrowForwardIosOutlinedIcon />} click={handleNavigation}/></div>
            </NewArrivalsHeader>



            <CardContainer>
                {arrivalsQuery.data.data.products.map((product) => {
                    return <CoralCard key={Math.random()} product={product}/>
                })}
            </CardContainer>
        </NewArrivalscontainer>
    );
};

export default NewArrivals;
