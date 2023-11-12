import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from 'react';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import './ItemDetails.css';
import { Button } from "@mui/base";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function handleClick(event) {
    event.preventDefault();
   
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}





export default function ItemDetails() {

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
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            HandBags
        </Link>,
        <Typography key="3" color="text.primary">
            DetailsPage
        </Typography>
    ];
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack spacing={2}>

                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <div className="detailsPage">
                <div className="top">
                    <div className="rightdetails">
                        <div className="title">
                            <h1>Coach</h1>
                            <div className="coach">Leather Coach Bag with adjustable starps.</div>
                        </div>

                        <div className="rating">
                            <div className="star">
                                <Stack spacing={1}>
                                    <Rating name="size-Large" defaultValue={2} size="Large" />

                                </Stack></div>
                            <div className="num-of-rate">(250)Ratings</div>

                        </div>
                        <br />
                        <div className="price">
                            <div className="new-price">
                                $54.69
                            </div>
                            <div className="old-price">
                                $78.66
                            </div>
                            <div className="discount"> 50%OFF</div>

                        </div>
                        <div className="quantity">
                            <Stack spacing={1.5} sx={{ maxWidth: 100 }}>
                                <Input
                                    type="number"
                                    defaultValue={2.5}
                                    slotProps={{
                                        input: {

                                            min: 1,
                                            max: 10,
                                            step: 1,
                                        },
                                    }}
                                />

                            </Stack>
                        </div>
                        <div className="buttons">

                            <div className="mycart"><Button>    <ShoppingBagOutlinedIcon />
                                <div className="buttontit bag" >Add to Bag</div>   </Button></div>
                            <div className="wishlist"> <Button><FavoriteBorderIcon />  <div className="buttontit wishlist" >Add to wishlist</div></Button></div>

                        </div>
                    </div>
                    <div className="leftdetails">
                        <div className="productimg">
                            <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />
                        </div>
                        <div className="productimagelist">
                            < div className="leftarrow"> <Button><KeyboardArrowLeftIcon></KeyboardArrowLeftIcon></Button></div>
                            <div className="imagelist">
                                <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />

                                <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />

                                <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />

                                <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />

                                <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />
                            </div>
                            <div><Button><KeyboardArrowRightIcon></KeyboardArrowRightIcon></Button></div>


                        </div>

                    </div>


                </div>

                <div className="buttomdetails">



                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                sx={{ backgroundColor: '#F1F1F1' }}
                            >
                                <Tab label="Product Description" {...a11yProps(0)} />
                                <Tab label="Related Products" {...a11yProps(1)} />
                                <Tab label="Ratings and Reviews" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Box>
                </div>








            </div>

        </>

    );
}


