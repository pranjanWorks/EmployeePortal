import { Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({ item }) => {
    return (
        <Card sx={{maxWidth:360, marginBottom: "4px"}}>
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Avatar>{item.name[0].toUpperCase()}</Avatar>
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