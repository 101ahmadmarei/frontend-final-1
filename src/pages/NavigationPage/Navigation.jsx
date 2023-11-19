import React, { useState } from 'react'
import Productlist from '../../Component/Productlist/Productlist'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import CoralPagination from '../../Component/CoralPagination/CoralPagination'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useProducts } from '../../API/getNewArrivals'


const NavigationPageContainer = styled.div`
padding: 0 20px;
`;

function NavigationPage() {

    const [page, setPage] = useState(1);

    let location = useLocation();
    let [type] = useSearchParams();
    

    const productsQuery = useProducts(`/products${location.search}`);
    

    if (productsQuery.isLoading) return <div>Loading...</div>
    if (productsQuery.error) {
        return <div>{productsQuery.error.message}</div>
    }



    return (
        <NavigationPageContainer>
            <Typography sx={{ fontSize: '32px', fontWeight: 600, color: 'primary.main', margin: '30px 0' }}>{type.get('type')}</Typography>
            <Productlist productsQuery={productsQuery} />
            <CoralPagination count={Number(productsQuery.data.data.totalPages)} page={page} setPage={setPage}/>
        </NavigationPageContainer>


    );
}

export default NavigationPage;