import * as React from 'react';
import IconBtn from '../IconBtn/IconBtn';
import './Header.css';
import TxtInput from '../textInput/textInput';
import { Link, SvgIcon } from '@mui/material';
import { ReactComponent as Logo } from '../../static/images/logo.svg'
import { ReactComponent as Favourties } from '../../static/icons/favourties.svg'
import { ReactComponent as User } from '../../static/icons/user.svg'
import { ReactComponent as Cart } from '../../static/icons/cart.svg'
import styled from 'styled-components';


const HeaderContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px;
`;

const FlexContainer = styled.div`
display: flex;
gap: 10px;
padding-left: 20px;
@media screen and (max-width: 660px) {
    display: none;
  }
`;


const SearchContainer = styled.div`
display:block;
width:100%;

@media screen and (max-width:1000px){
    display:none;
}
`;

const LogoCategreisContainer = styled.div`
display: flex;
align-items: center;
`;


const SerachPopUpContainer = styled.div`
width: 50%;
display: flex;
align-items: center;

@media screen and (max-width:1000px){
    justify-content:end;
}
`;

const BtnContainer = styled.div`
display:flex;
`

function Header() {
    return (
        <HeaderContainer>

            <LogoCategreisContainer>
                <Logo />
                <FlexContainer>

                    <Link href="#" underline="none" color={'secondary.contrastText'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                        {'Handbag'}
                    </Link>
                    <Link href="#" underline="none" color={'secondary.contrastText'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                        {'Watches'}
                    </Link>
                    <Link href="#" underline="none" color={'secondary.contrastText'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                        {'Skincare'}
                    </Link>
                    <Link href="#" underline="none" color={'secondary.contrastText'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                        {'Jewellery'}
                    </Link>
                    <Link href="#" underline="none" color={'secondary.contrastText'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                        {'Apparels'}
                    </Link>
                </FlexContainer>
            </LogoCategreisContainer>

            <SerachPopUpContainer>
                <SearchContainer>
                    <TxtInput placeholder={'Search for Products or brands.....'} width='100%' isSearch={true} />
                </SearchContainer>
                <BtnContainer>
                    {/* <CoralBtn type={'text'} label={<SvgIcon><Favourties/></SvgIcon>}/> */}
                    <IconBtn icon={<SvgIcon><Favourties /></SvgIcon>}></IconBtn>
                    <IconBtn icon={<SvgIcon><User /></SvgIcon>}></IconBtn>
                    <IconBtn icon={<SvgIcon><Cart /></SvgIcon>}></IconBtn>
                </BtnContainer>
            </SerachPopUpContainer>

        </HeaderContainer>

    );
}
export default Header;
