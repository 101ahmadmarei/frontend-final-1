import React from 'react'
import PageHeader from '../../Component/pageHeader/PageHeader'
import ProfileList from '../../Component/ProfileList/ProfileList'
import PersonalInfo from '../../Component/PersonalInfo/PersonalInfo'
import styled from 'styled-components'
import ChangePassword from '../../Component/ChangePassword/ChangePassword'


const FlexStyle = styled.div`
display: flex;
gap: 10px
`;

function PersonalPage() {
    return (
        <div>
            <PageHeader title={'Personal Information'} logoutBtn={true}/>
            <FlexStyle>
                <ProfileList />
                <div style={{width:'100%'}}>
                    <PersonalInfo />
                    <ChangePassword/>
                </div>

            </FlexStyle>
        </div>
    )
}

export default PersonalPage