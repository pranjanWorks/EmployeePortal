import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import React from "react";

const DetailsCard = ({ item }) => {
    return (
        <Box
            sx={{ width: '100%', maxWidth: 360, boxShadow: 1, borderRadius: 4 }}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <div>
                        <ListItemText
                            primary={
                                <Typography variant="body1" sx={{color: "GrayText", fontSize: '12px'}}>
                                    Name
                                </Typography>
                            }
                        />
                        <ListItemText primary={item.name} />
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <div>
                        <ListItemText
                            primary={
                                <Typography variant="body1" sx={{color: "GrayText", fontSize: '12px'}}>
                                    Email
                                </Typography>
                            }
                        />
                        <ListItemText primary={item.email} />
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BusinessIcon/>
                    </ListItemIcon>
                    <div>
                        <ListItemText
                            primary={
                                <Typography variant="body1" sx={{color: "GrayText", fontSize: '12px'}}>
                                    Department
                                </Typography>
                            }
                        />
                        <ListItemText primary={item.department} />
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <div>
                        <ListItemText
                            primary={
                                <Typography variant="body1" sx={{color: "GrayText", fontSize: '12px'}}>
                                    Primary Number
                                </Typography>
                            }
                        />
                        <ListItemText primary={item.primaryNo} />
                    </div>
                </ListItem>
            </List>
        </Box>
    );
};

export default DetailsCard;