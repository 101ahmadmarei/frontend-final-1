import React, { useState } from 'react'
import ProfileListItem from '../ProfileListItem/ProfileListItem'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const ListContainer = styled.div`
width : 30%;
background-color: #F4F4F4;
border-radius: 10px; 
max-height: 350px;
`;

function ProfileList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (title,url) => {
    setSelectedItem(title);
    navigate(url);
    
  };


  return (
    <ListContainer>
        <ProfileListItem 
        title='Personal Information'
        isSelected={selectedItem === 'Personal Information'}
        click={() => {handleItemClick('Personal Information','/personalInformation')}}/>

        <ProfileListItem 
        title='My orders'
        isSelected={selectedItem === 'My orders'}
        click={() => {handleItemClick('My orders','myOrders')}}/>

        <ProfileListItem title='Refer and Earn'/>
        <ProfileListItem title='My wishlist'/>
        <ProfileListItem title='My Reviwes'/>
        <ProfileListItem title='My Address Book'/>
        <ProfileListItem title='My Saved Card'/>
    </ListContainer>
  )
}

export default ProfileList