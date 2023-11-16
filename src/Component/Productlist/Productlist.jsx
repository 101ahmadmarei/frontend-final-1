import React from 'react'
import styled from 'styled-components'
import CoralCard from '../Card/CoralCard';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useArrivals, useProducts } from '../../API/getNewArrivals';
import PropTypes from 'prop-types'

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

function Productlist(props) {

    return (
        <ProductListContainer>
            {props.productsQuery.data.data.products.map((product)=>{
                return <CoralCard key={Math.random()} product={product} isRating={true}/>
            })}
        </ProductListContainer>
    )
}

Productlist.propTypes = {
    productsQuery: PropTypes.object,
}

export default Productlist