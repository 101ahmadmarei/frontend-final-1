import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import AppsIcon from '@mui/icons-material/Apps';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a product listing page.");
}

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
            <div className="Pagetitle" style={{ display: 'inline-block' }}>
                <div> <h1 style={{
                    fontSize: 34,
                    color: '#13101E',
                    fontWeight: 600,
                    float: 'left'
                }}>HandBags</h1></div>
                <div className="icons" style={{ display: 'flex' }}>
                    <div>
                        <AppsIcon />
                    </div>
                    <div>
                        <ViewListSharpIcon />
                    </div>
                    <div style={{}}>Showing 1 - 40 of 145 items</div>

                </div>

                <div className="ProductList">








                </div>


            </div>
        </div>
    );
}

