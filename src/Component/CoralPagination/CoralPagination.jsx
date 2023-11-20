import { Button, Pagination } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const PaginationContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
margin : 10px 0;
`;

function CoralPagination(props) {

    let [type] = useSearchParams();
    const navigate = useNavigate();
    let location = useLocation();

    



    const handleNext = () =>{
        props.setPage(props.page+1);
    }

    const handlePrev = () => {
        props.setPage(props.page-1);
    }

    const handleChange = (event , value) => {
        props.setPage(value);
        
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('offset', value-1);
        const updatedUrl = `${location.pathname}?${queryParams.toString()}`;
        navigate(updatedUrl);
    }
    return (
        <PaginationContainer>
            {/* {props.page > 1 ? <Button color='secondary' variant="contained" sx={{ padding: '5px 0', margin: 0 }} onClick={handlePrev}>Prev</Button> : <></>} */}
            <Pagination 
            page={props.page} 
            count={props.count} 
            shape="rounded" 
            color="primary" 
            hidePrevButton 
            hideNextButton 
            sx={{ backgroundColor: 'secondary.main', borderRadius: 2, padding: '5px' }}
            onChange={handleChange}
             />
            {/* {props.page !== props.count && <Button color='secondary' variant="contained" sx={{ padding: '5px 0', margin: 0 }} onClick={handleNext}>Next</Button> } */}
        </PaginationContainer>
    )
}

CoralPagination.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    setPage: PropTypes.func,
    id: PropTypes.string,
}

export default CoralPagination