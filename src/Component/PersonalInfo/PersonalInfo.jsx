import { Avatar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import CoralBtn from '../CoralBtn/CoralBtn';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TxtInput from '../textInput/textInput';

const PersonalInfoContainer = styled.div`
width: 100%
`;

const FlexStyle = styled.div`
display: flex;
gap: 10px;
align-items:end;
margin-top: 10px;
`;

const PersonalInfoContent = styled.div`
width: 70%
`
function PersonalInfo() {
    return (
        <PersonalInfoContainer>
            <Typography component='p' sx={{fontWeight:600, width: '100%', borderBlockEnd: '1px solid', borderColor: 'secondary.main' }}>Personal Information</Typography>
            <PersonalInfoContent>
                <FlexStyle>
                    <Avatar
                        alt="user"
                        src={require('../../static/images/1.jpg')}
                        sx={{ width: 80, height: 80, }} />

                    <CoralBtn label={'upload'} type={'contained'} />
                    <CoralBtnIcon label={'Delete'} type={'outlined'} icon={<DeleteOutlinedIcon />} color={'error'} />
                </FlexStyle>

                <FlexStyle>
                    <TxtInput label={'First Name'} type={'text'} placeholder={'Your Name'}/>
                    <TxtInput label={'Last Name'} type={'text'} placeholder={'Your Name'} />
                </FlexStyle>

                <TxtInput label={'Email'} type={'email'} placeholder={'a@g.com'}/>
                <TxtInput label={'Mobile Number'} type={'number'} width='70%' placeholder={'0599999999'}/>
            </PersonalInfoContent>
        </PersonalInfoContainer>
    )
}

export default PersonalInfo