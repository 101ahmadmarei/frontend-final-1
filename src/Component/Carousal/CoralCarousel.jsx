import { Button, Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router';
import styled from 'styled-components';


const CarouselContainer = styled.div`
padding: 20px;
// z-index: -1;
max-width: 1440px;
margin:auto;
`;
function CoralCarousel() {

    const navigate = useNavigate();


    const handleNavigation = (id,type) => {
        navigate(`/products?category_id=${id}&offset=0&limit=20&type=${type}`);
    }

    return (
        <CarouselContainer>
            <Carousel height={300} sx={{ borderRadius: 5, zIndex:0}} >
                <img src={require('../../static/images/2.png')} height={350} width={'100%'} style={{objectFit:'cover'}} onClick={()=>{
                    handleNavigation(7,'HandBags')
                }}/>
                <img src={require('../../static/images/1.png')} height={350} width={'100%'} style={{objectFit:'cover'}} onClick={()=>{
                    handleNavigation(4,'Watches')
                }}/>
            </Carousel>
        </CarouselContainer>
    )

}
export default CoralCarousel;