import { Card, CardContent, CardMedia, SvgIcon, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react'
import IconBtn from '../IconBtn/IconBtn';
import { ReactComponent as Favourties } from '../../static/icons/favourties.svg'

function CoralCard() {
    return (
        < Card sx={{ width:'100%',boxShadow:0 }}>
            <CardMedia
                sx={{ height: {xs: '180px', md:'280px'}, width: '100%' , borderRadius: 2}}
                image={require('../../static/images/bag.jpg')}
                title="bag"
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' , alignItems:'start', padding:'5px 0'}}>
                <div>
                    <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 500 }}>Boujee</Typography>
                    <Typography sx={{ color: 'lowEmphasis.main', fontSize: '14px', fontWeight: 400 }}>Black Bag</Typography>
                    <Typography sx={{ color: 'secondary.contrastText', fontSize: '16px', fontWeight: 500 }}>$56.49</Typography>
                </div>
                <IconBtn  icon={<SvgIcon><Favourties /></SvgIcon>}></IconBtn>
            </CardContent>

        </Card>
    )
}

export default CoralCard