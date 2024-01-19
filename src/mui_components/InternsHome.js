import { Box, Button, Fab, Typography } from "@mui/material";
import React from "react";
import ListView from "./ListView";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const InternsHome = ({ interns, deleteHandler }) => {
    const navigate = useNavigate();
    
    return (
        <Box 
            height="100vh" 
            display="flex"
            justifyContent="center"
        >
            <Box
                width="fit-content"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <ListView items={interns} deleteHandler={deleteHandler}></ListView>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-end"
                width="fit-content"
                sx={{padding: 1, marginBottom: "7vh"}}
            >
                <Fab color="primary" onClick={() => navigate("/add")}>
                    <AddIcon />
                </Fab>
            </Box>
        </Box>
    );
};

export default InternsHome;