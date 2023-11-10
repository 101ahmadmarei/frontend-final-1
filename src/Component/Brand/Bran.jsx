import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Bran = () => {
    return (
        <div style={{
            marginTop: 40,
            marginButton: 40,

        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#1B4B66',


            }}>
                <div>
                    <div style={{
                        fontSize: 34,
                        color: '#FFFFFF',
                        fontWeight: 600,
                    }}>Handpicked collections</div>
                </div>

            </div>
            <div className="Card-Container" style={{
                display: 'flex',
                overflowX: 'auto',
                backgroundColor: '#1B4B66'
            }}>

                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image="https://images.app.goo.gl/tJddLVcU1dp6oUHp6"

                        title="bag"
                    />

                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ color: '#171520', fontWeight: 600, fontSize: 24 }}>
                            Personal Care
                        </div>
                    </CardContent>




                </Card>
                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image="https://images.app.goo.gl/tJddLVcU1dp6oUHp6"
                        title="bag"
                    />

                    <CardContent sx={{ maxWidth: 262, height: 76 }}>
                        <div style={{
                            color: '#171520', fontWeight: 600, fontSize: 24,
                            textAlign: 'center',
                            position: 'absolute',
                            width: 163,
                            height: 32,
                            left: 450,
                            top: 830,

                        }}>Hand Bags</div>

                    </CardContent>


                </Card>
                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image="https://images.app.goo.gl/tJddLVcU1dp6oUHp6"
                        title="bag"
                    />

                    <CardContent sx={{ maxWidth: 262, height: 76 }}>
                        <div style={{
                            color: '#171520', fontWeight: 600, fontSize: 24, textAlign: 'center',

                            position: 'absolute',
                            width: 163,
                            height: 32,
                            left: 820,
                            top: 830,


                        }}>Wrist Watches</div>

                    </CardContent>


                </Card>
                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image="https://images.app.goo.gl/tJddLVcU1dp6oUHp6"
                        title="bag"
                    />

                    <CardContent sx={{ maxWidth: 262, height: 76 }}>
                        <div style={{
                            color: '#171520', fontWeight: 600, fontSize: 24, textAlign: 'center',

                            position: 'absolute',
                            width: 163,
                            height: 32,
                            left: 1200,
                            top: 830,


                        }}>Sun glasses</div>

                    </CardContent>


                </Card>

            </div>
        </div >
    );
};

export default Bran;
