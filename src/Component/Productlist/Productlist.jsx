import React from 'react'
import styled from 'styled-components'
import CoralCard from '../Card/CoralCard';

const ProductListContainer = styled.div`
display: grid;
grid-template-columns: auto;
gap: 20px;
@media only screen and (min-width: 690px) {
    grid-template-columns: repeat(2, 1fr);
}

@media only screen and (min-width: 912px) {
    grid-template-columns: repeat(5, 1fr);
}
`;

function Productlist() {
    return (
        <ProductListContainer>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
            <CoralCard isRating={true}/>
        </ProductListContainer>
    )
}

export default Productlist