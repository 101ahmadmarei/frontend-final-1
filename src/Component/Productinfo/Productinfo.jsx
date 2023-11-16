import React from 'react';
import 'Productinfo.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
function Productinfo() {
    return (
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
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>

                </CustomTabPanel>
            </Box>
        </div>);
}
export default Productinfo();