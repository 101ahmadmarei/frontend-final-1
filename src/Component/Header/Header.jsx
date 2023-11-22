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
import { useCategories } from '../../API/getCategories';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchPopUp from '../searchPopUp/SearchPopUp';
import { useSearch } from '../../API/search';


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
position: relative;
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

    
    const [searchQuery,setSearchQuery] = useSearchParams();
    const navigate = useNavigate();

    const categoriesQuery = useCategories(0,5);
    const search = useSearch(searchQuery.get('searchQuery'))

    
    const handleSearch = (e) =>{
        setSearchQuery({searchQuery: e.target.value});
        if(!e.target.value){
            searchQuery.delete('searchQuery');
            setSearchQuery(searchQuery);
        }
    }

    const handleNavigate = (url) => {
        navigate(url)
    }

    if (categoriesQuery.isLoading) return <div>Loading...</div>
    if (categoriesQuery.error) {
      return <div>{categoriesQuery.error.message}</div>
    }


    return (
        <HeaderContainer>

            <LogoCategreisContainer>
                <Logo onClick={() => {
                    navigate('/');
                }} />
                <FlexContainer>
                    {categoriesQuery.data.data.categories.map((categoreis) => {
                       return <Link 
                       key={categoreis.id} 
                       href={`/products?category_id=${categoreis.id}&offset=0&limit=20&type=${categoreis.name}`} 
                       underline="none" 
                       color={'secondary.contrastText'} 
                       sx={{ fontSize: '16px', fontWeight: 500 }}>
                            {categoreis.name}
                            </Link>
                    })}
                </FlexContainer>
            </LogoCategreisContainer>

            <SerachPopUpContainer>
                <SearchContainer>
                    <TxtInput 
                    placeholder={'Search for Products or brands.....'} 
                    width='100%' 
                    isSearch={true} 
                    onChange={handleSearch} 
                    value={searchQuery.get('searchQuery')? searchQuery.get('searchQuery') : ''}/>

                    {searchQuery.get('searchQuery') && !search.isLoading && <SearchPopUp response={search.data.data.products}/> }
                </SearchContainer>
                <BtnContainer>
                    {/* <CoralBtn type={'text'} label={<SvgIcon><Favourties/></SvgIcon>}/> */}
                    <IconBtn icon={<SvgIcon><Favourties /></SvgIcon>} ></IconBtn>
                    <IconBtn icon={<SvgIcon><User /></SvgIcon>} click={()=>{handleNavigate('/personalInformation')}}></IconBtn>
                    <IconBtn icon={<SvgIcon><Cart /></SvgIcon>}></IconBtn>
                </BtnContainer>
            </SerachPopUpContainer>

        </HeaderContainer>

    );
}
export default Header;
