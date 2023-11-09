import React from 'react'
import PageHeader from '../../Component/pageHeader/PageHeader'
import styled from 'styled-components';
import ProfileList from '../../Component/ProfileList/ProfileList';
import MyOrders from '../../Component/MyOrders/MyOrders';

const FlexStyle = styled.div`
display: flex;
gap: 10px
`;

function MyOrdersPage() {
    return (
        <div>
            <PageHeader title={'My Orders'} searchFeild={true} />

            <FlexStyle>
                <ProfileList />
                <div style={{width:'100%'}}>
                    <MyOrders/>
                </div>
            </FlexStyle>

        </div>
    )
}

export default MyOrdersPage