import { Box, Button, TextField } from "@mui/material";
import React from "react";

const AddIntern = () => {
    return (
        <Box
            component="form"
            width="fit-content"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { marginBottom: 1, width: '25ch' },
              }}
            noValidate
            autoComplete="off"
        >
            <TextField required id="name" label="Name"></TextField>
            <TextField required id="email" label="Email"></TextField>
            <TextField required id="department" label="Department"></TextField>
            <TextField required id="primaryNo" label="Primary Number"></TextField>
            <TextField required id="ext" label="Ext"></TextField>
            <Button variant="contained">Submit</Button>
        </Box>
    );
};

export default AddIntern;