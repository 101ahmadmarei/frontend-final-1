import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import TwitterIcon from "@mui/icons-material/Twitter";


import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: (theme.palette.background.div = ""),
    padding: theme.spacing(1)
}));
export default function ColorInversionFooter() {
    return (
        <div style={{ backgroundColor: " #1B4B66" }}>
            <Box sx={{ display: "flex", float: "right", marginTop: 10, gap: 2 }}>
                <Divider orientation="horizontal" />
                <IconButton variant="plain" sx={{ color: "white" }}>
                    <FacebookRoundedIcon />
                </IconButton>
                <IconButton variant="plain" sx={{ color: "white" }}>
                    <InstagramIcon />
                </IconButton>
                <IconButton variant="plain" sx={{ color: "white" }}>
                    <TwitterIcon />
                </IconButton>
                <IconButton variant="plain" sx={{ color: "white" }}>
                    <YouTubeIcon />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", s: "row" },
                    alignItems: { md: "flex-start" },
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 0
                }}
            >
                <List
                    size="sm"
                    orientation="vertical"
                    wrap
                    sx={{
                        flexGrow: 0,
                        "--ListItem-radius": "8px",
                        "--ListItem-gap": "0px"
                    }}
                >
                    <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
                        <ListSubheader
                            sx={{ fontWeight: "xl", width: 140, color: 'white', backgroundColor: '#1B4B66' }}
                        >
                            Shop By Category
                        </ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>
                                    SkinCare
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>
                                    PersonalCare
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>
                                    HandBags
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>
                                    Apparels
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>Watches</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>Eyewear</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{ color: "white" }}>
                                    Jewellery
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}