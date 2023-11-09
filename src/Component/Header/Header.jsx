import * as React from 'react';
import IconBtn from '../IconBtn/IconBtn';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Header.css';



function Header() {




    return (
        <section className='header'>
            <div className='container '>
                <h1 className='logo'>COR'AL</h1>
                <div className='labels'>

                    <p >Handbag</p>
                    <p >Watches</p>
                    <p > Skincare</p>
                    <p >Jewellery</p>
                    <p >Apparels</p>

                </div></div>
            <div className='container '>

                <div className="search" >
                    <div className='search-icon' >
                        <SearchOutlinedIcon style={{ position: 'absolute', top: '23% ', left: '23% ' }} />
                    </div>
                    <input style={{ width: 364 }}
                        type="text"
                        placeholder="   Search for products or brands....."
                    />

                </div>

                <div className='three-Button'>
                    <IconBtn icon={<FavoriteBorderOutlinedIcon />}></IconBtn>
                    <IconBtn icon={<PersonOutlineOutlinedIcon />}></IconBtn>
                    <IconBtn icon={<ShoppingBagOutlinedIcon />}></IconBtn>


                </div></div>

        </section>

    );
}
export default Header;