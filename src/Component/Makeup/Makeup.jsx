import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/base';
function Makeup() {




    return (
        <div className='Makeup_Layout'>
            <div className='Makeup_top'>
                <div className='Makeup-top-pic'>
                    <div className='lifestyle'>Life Style</div>
                    <div className='Makeup_acc '>Makeup acc From top Brand</div>
                </div>
            </div>

            <div className='Makeup_Buttom'>
                <div className='Makeup-right-pic'>
                    <div className='Product-overview Face '>Skincare Essentials</div>
                    <div className='Button-forward'>
                        <Button><ArrowForwardIcon sx={{ color: '#1B4B66' }}></ArrowForwardIcon>Facepacks&Peels</Button>
                    </div>
                </div>



                <div className='Makeup-left-pic'>
                    <div className='Product-overview Skin'></div>
                    <div className='Button-forward'>

                        <Button><ArrowForwardIcon sx={{ color: ' #A53F64' }}></ArrowForwardIcon></Button>
                    </div>

                </div>





            </div>


























        </div>
    );
}

export default Makeup;