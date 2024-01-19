import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const InfoCard = ({ item, deleteHandler }) => {
    const navigate = useNavigate();

    const onClickEditIcon = () => {
        navigate(`/edit/${item.id}`, { state: item });
    };
    
    return (
        <Box
            sx={{
                display: "flex", 
                justifyContent: "flex-start", 
                padding: 1, 
                width: 360, 
                gap: 1, 
                boxShadow: 4, 
                borderRadius: 2,
                marginBottom: 2
            }}
        >
            <Avatar sx={{bgcolor: blue[900]}}>{item.name[0].toUpperCase()}</Avatar>
            <Box
                sx={{
                    display: "flex", 
                    justifyContent: "space-between", 
                    width: "100%"
                }}
            >
                <Typography 
                    variant="h5" 
                    onClick={() => navigate(`/details/${item.id}`)}
                    sx={{cursor: "pointer"}}
                >
                    {item.name}
                </Typography>
                <Box
                    sx={{
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "space-between", 
                    }}
                >
                    <IconButton color="error" onClick={() => deleteHandler(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={onClickEditIcon}>
                        <EditIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default InfoCard;