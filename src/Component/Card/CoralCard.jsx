import { Card, CardContent, CardMedia, Rating, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import IconBtn from '../IconBtn/IconBtn';
import { ReactComponent as Favourties } from '../../static/icons/favourties.svg'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const FlexContainer = styled.div`
display:flex;
align-items:center;
gap:10px
`;
function CoralCard(props) {
    return (
        < Card sx={{ width: '100%', boxShadow: 0 }}>
            <CardMedia
                sx={{ height: { xs: '50px', md: '100px' }, width: '100%', borderRadius: 2 }}
                image={require('../../static/images/bag.jpg')}
                title="bag"
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', padding: '5px 0' }}>
                <div>
                    <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 500 }}>Boujee</Typography>
                    <Typography sx={{ color: 'lowEmphasis.main', fontSize: '14px', fontWeight: 400 }}>Black Bag</Typography>
                    {props.isRating ? <FlexContainer>
                        <Rating name="read-only" value={3} precision={0.5} readOnly icon={<StarRoundedIcon color='info' />} emptyIcon={<StarRoundedIcon />} />
                        <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'primary.main' }}>43 Ratings</Typography>
                    </FlexContainer> : null}
                    <FlexContainer>
                        <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 500 }}>$56.49</Typography>
                        <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 400, color: 'error.main' }}>50% OFF</Typography>
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
}

export default CoralCard