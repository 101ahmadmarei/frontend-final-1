import { Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const PrfileListItemContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #F4F4F4;
height: 50px;
border-radius: 10px;
`;

const Clickedcontainer = styled.div`
display: flex;
height: 100%;
align-items: center;
// gap:5px
`

const Clickedstyle = styled.div`
width: 3px;
height: 90%;
margin: 0 5px
`
function ProfileListItem(props) {

    const [isClicked, setIsClicked] = useState(false);
    return (


        <PrfileListItemContainer>
            <Clickedcontainer>
                <Clickedstyle style={{ backgroundColor: isClicked ? '#1B4B66' : '#F4F4F4' }}></Clickedstyle>
                <Typography component='p' sx={{ color: isClicked ? 'primary.main' : 'secondary.contrastText' }}>{props.title}</Typography>
            </Clickedcontainer>
            <ArrowForwardIosOutlinedIcon sx={{ color: isClicked ? 'primary.main' : 'secondary.contrastText' , width:16, height:16, padding:'0 5px'}} />
        </PrfileListItemContainer>

    )
}

ProfileListItem.propTypes = {
    title: PropTypes.string,
}


export default ProfileListItem