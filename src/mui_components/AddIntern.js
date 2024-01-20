import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddIntern = ({ addHandler }) => {
    const navigate = useNavigate();
    
    const [intern, setIntern] = useState({
        name: "",
        email: "",
        department: "",
        primaryNo: "",
    });

    const [isFormValid, setIsFormValid] = useState(true);

    const handleChange = (e) => {
        setIntern({
            ...intern,
            [e.target.id]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmptyField = Object.values(intern)
                                        .some(value => value == "");
        if (isEmptyField) {
            setIsFormValid(false);
            return;
        }
        addHandler(intern);
        navigate(-1);
    };
    
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
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
            <TextField required id="name" label="Name" value={intern.name} onChange={handleChange}></TextField>
            <TextField required id="email" label="Email" value={intern.email} onChange={handleChange}></TextField>
            <TextField required id="department" label="Department" value={intern.department} onChange={handleChange}></TextField>
            <TextField required id="primaryNo" label="Primary Number" value={intern.primaryNo} onChange={handleChange}></TextField>
            <Button type="submit" variant="contained">Submit</Button>

            {!isFormValid && (
                <Alert severity="error" sx={{marginTop: 1}}>
                    All fields are mandatory.
                </Alert>
            )}
        </Box>
    );
};

export default AddIntern;