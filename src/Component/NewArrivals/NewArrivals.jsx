import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CoralCard from '../Card/CoralCard';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import styled from 'styled-components';


const NewArrivalscontainer = styled.div`
padding: 0 20px
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
    return (
        <NewArrivalscontainer>
            <NewArrivalsHeader>
                <Typography sx={{fontSize:{xs:'18px',sm:'28px'}, fontWeight:600, color:'secondary.contrastText'}}>New Arrivals</Typography>
                <CoralBtnIcon label={'View All'} type={'text'} color={'primary'} endIcon={<ArrowForwardIosOutlinedIcon />} />
            </NewArrivalsHeader>



            <CardContainer>
                <CoralCard />
                <CoralCard />
                <CoralCard />
                <CoralCard />
            </CardContainer>
        </NewArrivalscontainer>
    );
};

export default NewArrivals;
