import * as React from 'react';
import './ShowImage.css';
import Quantity from './Quantity';
import Divider from '@mui/material/Divider';
import { Label } from '@mui/icons-material';
import { Button } from '@mui/base';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import { ReactComponent as Cart } from '../../static/icons/cart.svg';
import { ReactComponent as Star } from '../../static/icons/Star.svg';
import { ReactComponent as Starb } from '../../static/icons/Starb.svg'
import { SvgIcon } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Details() {
    const [value, setValue] = React.useState(4);
    return (

        <div className='details' >
            <div className='description'>
                <div className='coach'>Coach</div>
                <div className='leather'>Leather Coach Bag with adjustable starps.</div>

            </div>

            <div className='rating'>
                <div className='stars'>'
                    <div className='orange'>
                        <SvgIcon><Star /></SvgIcon>
                    </div>
                    <div className='orange'>
                        <SvgIcon><Star /></SvgIcon>
                    </div>
                    <div className='orange'>
                        <SvgIcon><Star /></SvgIcon>
                    </div>
                    <div className='orange'>
                        <SvgIcon><Star /></SvgIcon>
                    </div>
                    <div className='black'>
                        <SvgIcon><Starb /></SvgIcon>
                    </div>
                </div>
                <div className='how-many-rate'>(250)Ratings</div>

            </div>
            <div className='product-pricing'>
                <div className='big'>$54.69</div>
                <div className='medium'>$78.66</div>
                <div className='small'>50%OFF</div>
            </div>
            <Divider />
            <br />
            <div className='quantitycom'>
                <div className='quantity'>
                    Quantity:
                </div>
                <div className='quantityplus'>
                    <Quantity></Quantity>
                </div>
            </div>
            <br />
            <div class="button-container" style={{ paddingTop: 186 }}>
                <CoralBtnIcon className="icon-button-dark" label={"Add to card"} type={"contained"} color={"primary"} endIcon={<SvgIcon><Cart /></SvgIcon>} />
                <CoralBtnIcon className="icon-button-light" label={"Add to wishlist"} type={"outlined"} Icon={<SvgIcon> <FavoriteBorderOutlinedIcon /> </SvgIcon>} />


            </div>


        </div>



    );

}
