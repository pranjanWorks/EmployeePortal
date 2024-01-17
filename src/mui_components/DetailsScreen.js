import { Box } from "@mui/material";
import React from "react";
import DetailsCard from "./DetailsCard";

const DetailsScreen = ({ item }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <DetailsCard item={item} />
        </Box>
    );
};

export default DetailsScreen;