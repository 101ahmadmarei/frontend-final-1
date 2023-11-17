import { Button, Pagination } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PaginationContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
margin : 10px 0;
`;

function CoralPagination(props) {
    const [page, setPage] = useState(1);

    const handleNext = () =>{
        setPage(page+1);
    }

    const handlePrev = () => {
        setPage(page-1);
    }
    return (
        <PaginationContainer>
            {page > 1 ? <Button color='secondary' variant="contained" sx={{ padding: '5px 0', margin: 0 }} onClick={handlePrev}>Prev</Button> : <></>}
            <Pagination page={page} count={props.count} shape="rounded" color="primary" hidePrevButton hideNextButton sx={{ backgroundColor: 'secondary.main', borderRadius: 2, padding: '5px' }} />
            {page !== props.count && <Button color='secondary' variant="contained" sx={{ padding: '5px 0', margin: 0 }} onClick={handleNext}>Next</Button> }
        </PaginationContainer>
    )
}

CoralPagination.propTypes = {
    count: PropTypes.number,
}

export default CoralPagination