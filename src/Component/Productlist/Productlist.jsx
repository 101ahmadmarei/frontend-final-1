import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import AppsIcon from '@mui/icons-material/Apps';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import './Productlist.css';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a product listing page.");
}
const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});

export default function CustomSeparator() {
    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            HomePage
        </Link>,

        <Typography key="3" color="text.primary">
            HandBags
        </Typography>
    ];
    const currencies = [
        {
            value: "nine",
            label: "9"
        },
        {
            value: "twelve",
            label: "12"
        },
        {
            value: "fifteen",
            label: "15"
        },
        {
            value: "twenty",
            label: "20"
        }
    ];

    const currencie = [
        {
            value: "nine",
            label: "Position"
        },
        {
            value: "twelve",
            label: "Price"
        },
        {
            value: "fifteen",
            label: "color"
        },
        {
            value: "twenty",
            label: "trendy"
        }
    ];
    const { items } = usePagination({
        count: 5,
    });

    return (
        <div className="productlisting">
            <div className="breadcrumbs">

                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </div>

            <div className="Page-title">

                <div> <h1 > HandBags</h1> </div>
                <div className="icons" >
                    <div className="showicon">
                        <div className="gridicon" >
                            <AppsIcon />
                        </div>
                        <div className="gridicon">
                            <ViewListSharpIcon />
                        </div>
                        <div className="showing" >Showing 1 - 40 of 145 items</div></div>
                    <div className="toshow">
                        <div>To Show: </div>
                        <div className="textfield">
                            <TextField
                                id="filled-select-currency"
                                select
                                label=""
                                defaultValue="items"
                                helperText=""
                                variant="filled"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                    </div>

                    <div className="sortby">SortBy:
                        <div className="textfield">
                            <TextField
                                id="filled-select-currency"
                                select
                                label=""
                                defaultValue="items"
                                helperText=""
                                variant="filled"
                                sx={{ m: 1, minWidth: 120 }}
                            >
                                {currencie.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                    </div>

                </div></div>

            <div className="ProductList">
                <div className="five">
                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>

                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>




                </div>

                <div className="five">
                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>



                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>





                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>






                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>







                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>











                </div>

                <div className="five">
                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>




                </div>

                <div className="five">
                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>




                </div>

                <div className="five">
                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>


                    < Card sx={{ maxWidth: 400, height: 420, padding: 0, borderRadius: 3, borderColor: 'gray' }}>
                        <CardMedia
                            sx={{ height: 300, width: 400 }}
                            image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"

                            title="bag"
                        />
                        <div className="container">
                            <div className="cardcontent">
                                <CardContent sx={{ maxWidth: 362, height: 76, padding: 0, margin: 0 }}>
                                    <div style={{ color: '#171520', fontWeight: 500 }}>Boujee</div>
                                    <div style={{ color: '#626262', fontWeight: 400 }}>Black Bag</div>
                                    <div className="rating">
                                        <div className="star">
                                            <Stack spacing={1} sx={{ height: 5, width: 10, padding: 0 }}>
                                                <Rating name="size-small" defaultValue={2} size="small" />

                                            </Stack></div>
                                        <div className="numOfRate">43 Ratings</div>
                                    </div>
                                    <div className="price">
                                        <div className="newprice">23.25</div>
                                        <div className="oldprice">$56.49</div>
                                        <div className="discount">50% OFF</div>
                                    </div>
                                </CardContent></div>
                            <div className="heart">
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </div>
                    </Card>




                </div>





            </div>

            <div className="pagination"> <nav>
                <List>
                    {items.map(({ page, type, selected, ...item }, index) => {
                        let children = null;

                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                            children = '…';
                        } else if (type === 'page') {
                            children = (
                                <button
                                    type="button"
                                    style={{
                                        fontWeight: selected ? 'bold' : undefined,
                                    }}
                                    {...item}
                                >
                                    {page}
                                </button>
                            );
                        } else {
                            children = (
                                <button type="button" {...item}>
                                    {type}
                                </button>
                            );
                        }

                        return <li key={index}>{children}</li>;
                    })}
                </List>
            </nav></div>


        </div>

    );
}

