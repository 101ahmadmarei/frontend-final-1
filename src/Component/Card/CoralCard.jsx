import { Card, CardContent, CardMedia, Rating, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import IconBtn from '../IconBtn/IconBtn';
import { ReactComponent as Favourties } from '../../static/icons/favourties.svg'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link, useNavigate } from 'react-router-dom';

const FlexContainer = styled.div`
display:flex;
align-items:center;
gap:10px
`;
function CoralCard(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/productdetails/${props.product.id}`);

    }
    return (
        < Card sx={{ width: '100%', boxShadow: 0 }} onClick={() => { handleClick() }}>
            <CardMedia
                sx={{ height: { xs: '50px', md: '100px' }, width: '100%', borderRadius: 2 }}
                image={require('../../static/images/bag.jpg')}
                title="bag"
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', padding: '5px 0' }}>
                <div>
                    <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 500 }}>{props.product.name}</Typography>
                    <Typography sx={{ color: 'lowEmphasis.main', fontSize: '14px', fontWeight: 400 }}>{props.product.short_description}</Typography>
                    {props.isRating ? <FlexContainer>
                        <Rating name="read-only" value={Number(props.product.avg_rate)} precision={0.5} readOnly icon={<StarRoundedIcon color='info' />} emptyIcon={<StarRoundedIcon />} />
                        <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'primary.main' }}>{props.product.count_rate} Ratings</Typography>
                    </FlexContainer> : null}
                    <FlexContainer>
                        <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 500 }}>${props.product.price}</Typography>
                        {props.product.discount !== 0 ? <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 400, color: 'error.main' }}>{props.product.discount}% OFF</Typography> : null}
                    </FlexContainer>
                </div>
                <IconBtn icon={<SvgIcon><Favourties /></SvgIcon>}></IconBtn>
            </CardContent>

        </Card>
    )
}

CoralCard.defaultProps = {
    isRating: false,
}

CoralCard.propTypes = {
    isRating: PropTypes.bool,
    product: PropTypes.object,
}

export default CoralCard