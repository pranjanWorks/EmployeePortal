import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ListView from "./ListView";
import interns from "../sample_data/interns";

const InternsHome = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <ListView items={interns}></ListView>
            <Button variant="outlined">Add New Intern</Button>
        </Box>
    );
};

export default InternsHome;