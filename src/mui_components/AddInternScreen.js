import { Box } from "@mui/material";
import React from "react";
import AddIntern from "./AddIntern";

const AddInternScreen = ({ addHandler }) => {
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <AddIntern addHandler={addHandler} />
        </Box>
    );
};

export default AddInternScreen;