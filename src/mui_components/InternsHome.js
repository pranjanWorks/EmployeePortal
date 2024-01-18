import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ListView from "./ListView";
import { Link } from "react-router-dom";

const InternsHome = ({ interns }) => {
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <ListView items={interns}></ListView>
            <Button 
                variant="outlined"
                component={Link}
                to="/add"
            >
                Add New Intern
            </Button>
        </Box>
    );
};

export default InternsHome;