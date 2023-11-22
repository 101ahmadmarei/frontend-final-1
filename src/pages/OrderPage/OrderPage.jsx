import React from 'react'
import PageHeader from '../../Component/pageHeader/PageHeader'
import Order from '../../Component/Order/Order';
import ProfileList from '../../Component/ProfileList/ProfileList';
import styled from 'styled-components';

const FlexStyle = styled.div`
display: flex;
gap: 10px
`;

function OrderPage() {
    return (
        <div style={{ width: '100%' }}>
            <Order />
        </div>
    )
}

export default OrderPage