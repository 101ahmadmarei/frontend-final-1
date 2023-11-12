import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';


const Handpicked = () => {
    return (
        <div  >
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
                backgroundColor: '#1B4B66',
                paddingBottom: 20,
                paddingTop: 20

            }}>

                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
                        title="bag"
                    />

                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            color: '#171520', fontWeight: 600, fontSize: 24,
                            color: '#171520', fontWeight: 600, fontSize: 24,
                            textAlign: 'center',
                            position: 'absolute',
                            width: 163,
                            height: 32,
                            left: 180,
                            top: 950
                        }}>
                            Personal Care
                        </div>
                    </CardContent>




                </Card>
                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
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
                            top: 950,

                        }}>Hand Bags</div>

                    </CardContent>


                </Card>
                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
                        title="bag"
                    />

                    <CardContent sx={{ maxWidth: 262, height: 76 }}>
                        <div style={{
                            color: '#171520', fontWeight: 600, fontSize: 24, textAlign: 'center',

                            position: 'absolute',
                            width: 163,
                            height: 32,
                            left: 820,
                            top: 950,


                        }}>Wrist Watches</div>

                    </CardContent>


                </Card>
                <Card sx={{ maxWidth: 280, height: 280, marginLeft: 10, borderRadius: 10, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 280, width: 280 }}
                        image='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
                        title="bag"
                    />

                    <CardContent sx={{ maxWidth: 262, height: 76 }}>
                        <div style={{
                            color: '#171520', fontWeight: 600, fontSize: 24, textAlign: 'center',

                            position: 'absolute',
                            width: 163,
                            height: 32,
                            left: 1200,
                            top: 950,


                        }}>Sun glasses</div>

                    </CardContent>


                </Card>

            </div>
        </div >
    );
};

export default Handpicked;
