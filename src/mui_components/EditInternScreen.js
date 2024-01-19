import { Box } from "@mui/material";
import React from "react";
import EditIntern from "./EditIntern";

const EditInternScreen = ({ editHandler }) => {
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <EditIntern editHandler={editHandler} />
        </Box>
    );
};

export default EditInternScreen;