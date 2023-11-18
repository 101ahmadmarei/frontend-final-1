import React from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';

import Carousal from '../../Component/Carousal/CoralCarousel';
import Productlist from '../../Component/Productlist/Productlist';
import { Button, Pagination, PaginationItem, Typography } from '@mui/material';
import styled from 'styled-components';
import CoralPagination from '../../Component/CoralPagination/CoralPagination';


const NavigationPageContainer = styled.div`
padding: 0 20px;
`;

function NavigationPage() {
    return (
        <NavigationPageContainer>
            <Typography sx={{ fontSize: '32px', fontWeight: 600, color: 'primary.main', margin: '30px 0' }}>Handbags</Typography>
            <Productlist />
            <CoralPagination />
        </NavigationPageContainer>

    )


}

export default NavigationPage;