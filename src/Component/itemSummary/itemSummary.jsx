import React from 'react'
import './itemSummary.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from '@mui/material';

const ItemSummaryContainer =  styled.div`
display: flex;
`;

const Imagecontainer =  styled.div`
width: 75px;
height: 75px;
border-radius: 10px;
`;


const ItemSummaryInfo  =styled.div`
padding: 0 20px;
`;
const Description = styled.p`
text-overflow: ellipsis;
max-width: 250px;
overflow: hidden;
white-space: nowrap;
padding-bottom: 15px;
`;



function ItemSummary(props) {
  return (
    <ItemSummaryContainer>

        <Imagecontainer>
            <img className='image' src={props.product.product.img} alt='bag' width={'100%'} height={'100%'}/>
        </Imagecontainer>

        <ItemSummaryInfo>
            <Typography sx={{padding:'2px',margin:0, fontSize:16, fontWeight:600}}>{props.product.product.name}</Typography>
            <Typography sx={
              {padding:'2px',
              margin:0, 
              fontSize:14, 
              color:'textGray.main',
              textOverflow:'ellipsis',
              maxWidth:'250px',
              overflow:'hidden',
              whiteSpace:'nowrap'
            }}>{props.product.product.short_description}</Typography>
            <Typography sx={{padding:'2px',margin:0, fontSize:14, color:'textGray.main'}}>Qty- {props.product.product_quantity}</Typography>
        </ItemSummaryInfo>
    </ItemSummaryContainer>
  )
}

ItemSummary.propTypes = {
  product : PropTypes.object,
}

export default ItemSummary