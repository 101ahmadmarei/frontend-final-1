import { Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { click } from '@testing-library/user-event/dist/click';

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
margin: 0 5px;
`
function ProfileListItem(props) {

    // const [isClicked, setIsClicked] = useState(false);
    return (


        <PrfileListItemContainer onClick={props.click}>
            <Clickedcontainer>
                <div style={{width:'3px',height:'90%',margin:'0 5px', backgroundColor: props.isSelected ? '#1B4B66' : '#F4F4F4' }}></div>
                <Typography component='p' sx={{ color: props.isSelected ? 'primary.main' : 'secondary.contrastText' }}>{props.title}</Typography>
            </Clickedcontainer>
            <ArrowForwardIosOutlinedIcon sx={{ color: props.isSelected ? 'primary.main' : 'secondary.contrastText' , width:26, height:26, padding:'0 5px'}} />
        </PrfileListItemContainer>

    )
}

ProfileListItem.propTypes = {
    title: PropTypes.string,
    isSelected : PropTypes.bool,
    click: PropTypes.func,
}


export default ProfileListItem