import { Button, Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router';
import styled from 'styled-components';


const CarouselContainer = styled.div`
padding: 20px;
z-index: -1;
`;
function CoralCarousel() {

    const navigate = useNavigate();


    const handleNavigation = (id,type) => {
        navigate(`/products?category_id=${id}&offset=0&limit=2&type=${type}`);
    }

    return (
        <CarouselContainer>
            <Carousel height={200} sx={{ borderRadius: 5,zIndex:-1}}>
                <img src={require('../../static/images/bag1.jpg')} height={300} width={'100%'} style={{objectFit:'cover'}} onClick={()=>{
                    handleNavigation(2,'Skin Care')
                }}/>
                <img src={require('../../static/images/bag2.jpg')} height={300} width={'100%'} style={{objectFit:'cover'}} onClick={()=>{
                    handleNavigation(4,'Watches')
                }}/>
                <img src={require('../../static/images/bag.jpg')} height={300} width={'100%'} style={{objectFit:'cover'}} onClick={()=>{
                    handleNavigation(7,'HandBags')
                }}/>
            </Carousel>
        </CarouselContainer>
    )

}
export default CoralCarousel;