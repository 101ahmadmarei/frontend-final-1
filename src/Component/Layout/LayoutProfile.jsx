import React from 'react'
import PageHeader from '../../Component/pageHeader/PageHeader'
import ProfileList from '../../Component/ProfileList/ProfileList'
import PersonalInfo from '../../Component/PersonalInfo/PersonalInfo'
import styled from 'styled-components'
import ChangePassword from '../../Component/ChangePassword/ChangePassword'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
padding:30px;
`;

const FlexStyle = styled.div`
display: flex;
gap: 10px
`;



function LayoutProfile() {
    return (
        <Container>
            <PageHeader title={'Personal Information'} logoutBtn={true} />
            <FlexStyle>
                <ProfileList />
                <Outlet />
            </FlexStyle>
        </Container>
    )
}

export default LayoutProfile