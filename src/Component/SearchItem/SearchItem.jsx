import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const SearchItemContainer = styled.div`
display: flex;
`;

const SearchItemInfo = styled.div`
padding: 0 20px;
`;

const ImageContainer = styled.div`
width: 75px;
height: 75px;
border-radius: 10px;
`;
function SearchItem(props) {

  return (
    <SearchItemContainer>

    <ImageContainer>
        <img src={props.product.img} alt='bag' width={'100%'} height={'100%'} style={{borderRadius:'10px'}}/>
    </ImageContainer>

    <SearchItemInfo>
        <Typography sx={{padding:'2px', margin:0, fontSize:'16px', fontWeight:600}}>{props.product.name}</Typography>
        <Typography sx={{padding:'2px', margin:0, fontSize:'14px', color:'textGray.main'}}>{props.product.short_description}</Typography>
    </SearchItemInfo>
</SearchItemContainer>
  )
}

SearchItem.propTypes = {
    product: PropTypes.object,
}

export default SearchItem