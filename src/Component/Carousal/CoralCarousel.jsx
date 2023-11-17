import { Button, Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';


const CarouselContainer = styled.div`
padding: 20px;
z-index: -1;
`;
function CoralCarousel() {
    return (
        <CarouselContainer>
            <Carousel height={200} sx={{ borderRadius: 5,zIndex:-1}}>
                <img src={require('../../static/images/bag1.jpg')} height={300} width={'100%'} style={{objectFit:'cover'}}/>
                <img src={require('../../static/images/bag2.jpg')} height={300} width={'100%'} style={{objectFit:'cover'}}/>
                <img src={require('../../static/images/bag.jpg')} height={300} width={'100%'} style={{objectFit:'cover'}}/>
            </Carousel>
        </CarouselContainer>
    )

}
export default CoralCarousel;