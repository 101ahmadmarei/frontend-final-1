import React from 'react'
import styled from 'styled-components';
import TxtInput from '../textInput/textInput';
import { Typography } from '@mui/material';


const ChangePasswordContainer = styled.div`
width: 100%;
margin-top: 30px;
`;

const ChangePasswordContent = styled.div`
width: 70%;
margin-top: 20px
`

function ChangePassword() {
    return (
        <ChangePasswordContainer>
            <Typography component='p' sx={{fontWeight:600, width: '100%', borderBlockEnd: '1px solid', borderColor: 'secondary.main' }}>Change Password</Typography>
            <ChangePasswordContent>
                <TxtInput label={'Current Password'} type={'password'} width='50%'/>
                <TxtInput label={'New Password'} type={'password'} width='50%' isPassword={true}/>
                <TxtInput label={'Confirm Password'} type={'password'} width='50%'/>
            </ChangePasswordContent>
        </ChangePasswordContainer>
    )
}

export default ChangePassword