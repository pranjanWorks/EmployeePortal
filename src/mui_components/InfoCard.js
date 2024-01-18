import { Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ item }) => {
    return (
        <Card 
            sx={{maxWidth:360, 
            marginBottom: 1, 
            borderRadius: 2}}
            component={Link}
            to={"/details/"+item.id}
        >
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Avatar sx={{bgcolor: blue[900]}}>{item.name[0].toUpperCase()}</Avatar>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default InfoCard;