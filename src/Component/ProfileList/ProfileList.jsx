import React from 'react'
import ProfileListItem from '../ProfileListItem/ProfileListItem'
import styled from 'styled-components'

const ListContainer = styled.div`
width : 30%;
background-color: #F4F4F4;
border-radius: 10px; 
max-height: 80px
`;

function ProfileList() {
  return (
    <ListContainer>
        <ProfileListItem title='Personal Information'/>
        <ProfileListItem title='My orders'/>
    </ListContainer>
  )
}

export default ProfileList