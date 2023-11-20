import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import CoralCard from '../Card/CoralCard';
import { useRelatedProducts } from '../../API/getRelatedProduct';
import { useRatingReview } from '../../API/getRatingandReview';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useEffect } from 'react';



const ProductListContainer = styled.div`
display: grid;
grid-template-columns: auto;
gap: 20px;
@media only screen and (min-width: 690px) {
    grid-template-columns: repeat(2, 1fr);
}

@media only screen and (min-width: 912px) {
    grid-template-columns: repeat(5, 1fr);
}
`;
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

{/*main Fun*/ }




function Tablist(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const RatingQuery = useRatingReview();
    const RelatedQuery = useRelatedProducts();


    if (RelatedQuery.isLoading)
        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    if (RelatedQuery.error) {
        return <div>{RelatedQuery.error.message}</div>
    }

    if (RatingQuery.isLoading) return <div>Loading...</div>
    if (RatingQuery.error) {
        return <div>{RatingQuery.error.message}</div>

    }
    return (
        <div className="buttomdetails" style={{ paddingTop: 200 }}>



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
                    <ProductListContainer>
                        {RelatedQuery.data.data.products.map((product) => {
                            return <CoralCard key={Math.random()} product={product} />
                        })}
                    </ProductListContainer>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div>

                        {RatingQuery.data.data.reviews.map((review) => (
                            <div key={review.id}>
                                <p>{`Rating: ${review.rate}`}</p>
                                <p>{review.description}</p>
                            </div>
                        ))}
                    </div>


                </CustomTabPanel>
            </Box>
        </div>



    );
}

export default Tablist;