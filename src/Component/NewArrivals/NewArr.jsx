import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const NewArr = () => {
    return (
        <div style={{
            marginTop: 80,
            marginButton: 40,

        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div>
                    <h1 style={{
                        fontSize: 34,
                        color: '#13101E',
                        fontWeight: 600,
                    }}>New Arrivals</h1>
                </div>
                <div>
                    <Button>
                        View all
                        <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>

                    </Button>
                </div>
            </div>
            <div className="Card-Container" style={{
                display: 'flex',
                overflowX: 'auto',
            }}>

                <Card sx={{ maxWidth: 286, height: 412, marginLeft: 10, borderRadius: 5, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 286, width: 286 }}
                        image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                        title="bag"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardContent sx={{ maxWidth: 262, height: 76 }}>
                            <div style={{ color: '#171520', fontWeight: 500 }}>Grande</div>
                            <div style={{ color: '#626262', fontWeight: 400 }}>Blossum pouch</div>
                            <div>$39.49</div>
                        </CardContent>
                        <div>
                            <FavoriteBorderOutlinedIcon />
                        </div>
                    </div>
                </Card>

                <  Card sx={{ maxWidth: 286, height: 412, marginLeft: 10, borderRadius: 5, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 286, width: 286 }}
                        image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                        title="bag"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardContent sx={{ maxWidth: 262, height: 76 }}>
                            <div style={{ color: '#171520', fontWeight: 500 }}>Coach</div>
                            <div style={{ color: '#626262', fontWeight: 400 }}>Leather Coach Bag</div>
                            <div>$54.69</div>
                        </CardContent>
                        <div>
                            <FavoriteBorderOutlinedIcon />
                        </div>
                    </div>
                </Card>


                < Card sx={{ maxWidth: 286, height: 412, marginLeft: 10, borderRadius: 5, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 286, width: 286 }}
                        image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                        title="bag"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardContent sx={{ maxWidth: 262, height: 76 }}>
                            <div style={{ color: '#171520', fontWeight: 500 }}>Remus</div>
                            <div style={{ color: '#626262', fontWeight: 400 }}>Brown Strap Bag</div>
                            <div>$56.49</div>
                        </CardContent>
                        <div>
                            <FavoriteBorderOutlinedIcon />
                        </div>
                    </div>
                </Card>

                < Card sx={{ maxWidth: 286, height: 412, marginLeft: 10, borderRadius: 5, borderColor: 'gray' }}>
                    <CardMedia
                        sx={{ height: 286, width: 286 }}
                        image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                        title="bag"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardContent sx={{ maxWidth: 262, height: 76 }}>
                            <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                            <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                            <div>$56.49</div>
                        </CardContent>
                        <div>
                            <FavoriteBorderOutlinedIcon />
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default NewArr;
