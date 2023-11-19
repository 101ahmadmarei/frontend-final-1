import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import './Brand.css';
import { useBrands } from '../../API/getBrands';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const BrandGrid = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 30px;
@media screen and (max-width: 800px) {
grid-template-columns: repeat(3, 1fr);
}
`;

const BrandsContainer = styled.div`
padding : 0 20px;
`;

function Brand() {

    const brandsQuery = useBrands();
    const navigate = useNavigate();


    const handleNavigation = (brandId,brandName) => {
        navigate(`/products?brand_id=${brandId}&offset=0&limit=20&type=${brandName}`);
    }

    if (brandsQuery.isLoading) return <div>Loading...</div>
    if (brandsQuery.error) {
      return <div>{brandsQuery.error.message}</div>
    }

    return (
        <BrandsContainer id='brands'>

            <h1>Shop By Brands</h1>


            <BrandGrid>

                {brandsQuery.data.data.brands.map((brand) => {
                    return <Card key={Math.random()} sx={{  borderRadius: 2 }} onClick={()=>{
                        handleNavigation(brand.id, brand.name)
                    }}>
                        <img src={brand.img} width={'100%'} height={'100%'} />
                    </Card>
                })}
            </BrandGrid>
        </BrandsContainer>

    );


}

export default Brand;