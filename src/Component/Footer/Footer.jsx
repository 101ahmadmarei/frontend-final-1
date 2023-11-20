import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';

import './Footer.css';
import { YoutubeSearchedFor } from '@mui/icons-material';
import { Link, Typography } from '@mui/material';
import styled from 'styled-components';
import { useCategories } from '../../API/getCategories';

const FooterContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
background-color: #1B4B66;
padding :30px 50px;
@media screen and (max-width: 660px){
    display:block;
}
`;

const Block = styled.div`
display:flex;
margin-top:10px;
flex-direction:column;
gap:5px;
`;

const AddressContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
color: #ffffff;
padding: 30px 0
`;

const FlexContainer = styled.div`
display:flex;
gap: 30px;

@media screen and (max-width: 660px){
    display:block;
}
`;

const ShopByContainer = styled.div`
margin-top:10px
`;

function Footer() {

    const categoriesQuery = useCategories(0,7);

    

    if (categoriesQuery.isLoading) return <div>Loading...</div>
    if (categoriesQuery.error) {
      return <div>{categoriesQuery.error.message}</div>
    }

    return (
        <FooterContainer>


            <FlexContainer>
                <ShopByContainer>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }} color={'secondary.main'}>Shop by Category</Typography>
                    <Block>
                    {categoriesQuery.data.data.categories.map((categoreis) => {
                       return <Link 
                       key={Math.random()} 
                       href={`/products?category_id=${categoreis.id}&page=0&size=20&type=${categoreis.name}`} 
                       underline="hover" 
                       color={'textGray.main'} 
                       sx={{ fontSize: '16px', fontWeight: 500 }}>
                       {categoreis.name}
                       </Link>
                    })}
                        
                    </Block>
                </ShopByContainer>

                <ShopByContainer>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }} color={'secondary.main'}>Shop by Product</Typography>
                    <Block>
                        <Link href="#" underline="hover" color={'textGray.main'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                            {'Featured'}
                        </Link>
                        <Link href="brands" underline="hover" color={'textGray.main'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                            {'Brands'}
                        </Link>
                        <Link href="#" underline="hover" color={'textGray.main'} sx={{ fontSize: '16px', fontWeight: 500 }}>
                            {'Trendy'}
                        </Link>
                    </Block>
                </ShopByContainer>
            </FlexContainer>

            <AddressContainer>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="38" viewBox="0 0 200 38" fill="none">
                        <circle cx="19" cy="19" r="19" fill="#639599" />
                        <path d="M12.5088 20.7084H15.3489V32.4004C15.3489 32.6312 15.5359 32.8183 15.7668 32.8183H20.5822C20.813 32.8183 21.0001 32.6312 21.0001 32.4004V20.7634H24.265C24.4772 20.7634 24.6558 20.6041 24.6801 20.3933L25.176 16.0889C25.1896 15.9704 25.152 15.8518 25.0728 15.763C24.9935 15.6741 24.88 15.6232 24.7609 15.6232H21.0002V12.9249C21.0002 12.1116 21.4382 11.6991 22.302 11.6991C22.4252 11.6991 24.7609 11.6991 24.7609 11.6991C24.9917 11.6991 25.1788 11.512 25.1788 11.2812V7.33016C25.1788 7.09932 24.9917 6.91227 24.7609 6.91227H21.3722C21.3483 6.9111 21.2953 6.90918 21.217 6.90918C20.6291 6.90918 18.5853 7.0246 16.971 8.50978C15.1822 10.1556 15.4309 12.1262 15.4903 12.4678V15.6231H12.5088C12.278 15.6231 12.0909 15.8101 12.0909 16.041V20.2904C12.0909 20.5212 12.278 20.7084 12.5088 20.7084Z" fill="#1B4B66" />
                        <circle cx="73" cy="19" r="19" fill="#639599" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M68.371 8.70428C69.5685 8.64964 69.9508 8.63672 73 8.63672C76.0491 8.63672 76.4315 8.64964 77.6289 8.70428C78.824 8.75883 79.6401 8.9486 80.3543 9.22616C81.0926 9.51308 81.7187 9.89698 82.3428 10.5211C82.967 11.1453 83.3509 11.7714 83.6378 12.5097C83.9154 13.2239 84.1051 14.04 84.1597 15.235C84.2143 16.4325 84.2272 16.8148 84.2272 19.864C84.2272 22.9132 84.2143 23.2955 84.1597 24.493C84.1051 25.688 83.9154 26.5041 83.6378 27.2183C83.3509 27.9566 82.967 28.5827 82.3428 29.2069C81.7187 29.831 81.0926 30.2149 80.3543 30.5019C79.6401 30.7794 78.824 30.9692 77.6289 31.0237C76.4315 31.0784 76.0491 31.0913 73 31.0913C69.9508 31.0913 69.5685 31.0784 68.371 31.0237C67.1759 30.9692 66.3598 30.7794 65.6456 30.5019C64.9074 30.2149 64.2812 29.831 63.6571 29.2069C63.0329 28.5827 62.649 27.9566 62.3621 27.2183C62.0845 26.5041 61.8948 25.688 61.8402 24.493C61.7856 23.2955 61.7727 22.9132 61.7727 19.864C61.7727 16.8148 61.7856 16.4325 61.8402 15.235C61.8948 14.04 62.0845 13.2239 62.3621 12.5097C62.649 11.7714 63.0329 11.1453 63.6571 10.5211C64.2812 9.89698 64.9074 9.51308 65.6456 9.22616C66.3598 8.9486 67.1759 8.75883 68.371 8.70428ZM78.9931 15.2182C79.7372 15.2182 80.3404 14.6149 80.3404 13.8709C80.3404 13.1268 79.7372 12.5236 78.9931 12.5236C78.249 12.5236 77.6458 13.1268 77.6458 13.8709C77.6458 14.6149 78.249 15.2182 78.9931 15.2182ZM78.2394 19.8637C78.2394 22.7573 75.8937 25.1031 73 25.1031C70.1064 25.1031 67.7606 22.7573 67.7606 19.8637C67.7606 16.97 70.1064 14.6243 73 14.6243C75.8937 14.6243 78.2394 16.97 78.2394 19.8637ZM76.4545 19.864C76.4545 21.7719 74.9078 23.3185 73 23.3185C71.0921 23.3185 69.5454 21.7719 69.5454 19.864C69.5454 17.9561 71.0921 16.4094 73 16.4094C74.9078 16.4094 76.4545 17.9561 76.4545 19.864Z" fill="#1B4B66" />
                        <circle cx="127" cy="19" r="19" fill="#639599" />
                        <path d="M139.091 12.6896C138.201 13.0842 137.245 13.3509 136.241 13.4709C137.266 12.8568 138.052 11.8846 138.423 10.7261C137.464 11.2946 136.402 11.7075 135.272 11.93C134.367 10.9658 133.078 10.3633 131.651 10.3633C128.911 10.3633 126.69 12.5846 126.69 15.3244C126.69 15.7132 126.734 16.0919 126.818 16.455C122.695 16.2481 119.039 14.2729 116.592 11.2714C116.165 12.0041 115.921 12.8564 115.921 13.7656C115.921 15.4868 116.797 17.0053 118.128 17.8949C117.315 17.8692 116.55 17.646 115.881 17.2745C115.88 17.2952 115.88 17.3159 115.88 17.3368C115.88 19.7406 117.59 21.7458 119.86 22.2015C119.444 22.3149 119.005 22.3755 118.553 22.3755C118.233 22.3755 117.922 22.3444 117.62 22.2865C118.251 24.2575 120.083 25.6919 122.254 25.7319C120.556 27.0625 118.417 27.8557 116.093 27.8557C115.692 27.8557 115.297 27.8322 114.909 27.7864C117.105 29.194 119.712 30.0153 122.514 30.0153C131.64 30.0153 136.63 22.4556 136.63 15.8997C136.63 15.6845 136.625 15.4706 136.615 15.2578C137.585 14.5584 138.426 13.6846 139.091 12.6896Z" fill="#1B4B66" />
                        <circle cx="181" cy="19" r="19" fill="#639599" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M191.992 11.6857C192.375 12.0686 192.652 12.5453 192.793 13.0681C193.608 16.347 193.42 21.5257 192.809 24.9312C192.667 25.454 192.391 25.9306 192.008 26.3136C191.625 26.6966 191.148 26.9726 190.625 27.114C188.71 27.636 181.003 27.636 181.003 27.636C181.003 27.636 173.296 27.636 171.382 27.114C170.859 26.9726 170.382 26.6966 169.999 26.3136C169.615 25.9306 169.339 25.454 169.198 24.9312C168.378 21.6665 168.603 16.4847 169.182 13.0839C169.323 12.5611 169.6 12.0845 169.983 11.7015C170.366 11.3185 170.843 11.0425 171.366 10.9011C173.281 10.3791 180.988 10.3633 180.988 10.3633C180.988 10.3633 188.694 10.3633 190.609 10.8853C191.132 11.0267 191.609 11.3027 191.992 11.6857ZM184.701 18.9996L178.532 22.7009V15.2983L184.701 18.9996Z" fill="#1B4B66" />
                    </svg>
                </div>

                <Typography sx={{ fontSize: '14px', fontWeight: 500 }} > {<PlaceIcon />} United States</Typography>

                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'textGray.main' }}> © 2021 | Cora Leviene All Rights Reserved </Typography>
            </AddressContainer>

        </FooterContainer >

    );
}

export default Footer;

