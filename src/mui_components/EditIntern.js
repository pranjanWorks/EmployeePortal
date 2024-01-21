import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditIntern = ({ editHandler }) => {
    const navigate = useNavigate();
    
    const location = useLocation();
    
    const [intern, setIntern] = useState(location.state);

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
        editHandler(intern);
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
            <TextField required id="name" label="Name" value={intern.name} onChange={handleChange} inputProps={{'data-testid': 'name-input'}}></TextField>
            <TextField required id="email" label="Email" value={intern.email} onChange={handleChange} inputProps={{'data-testid': 'email-input'}}></TextField>
            <TextField required id="department" label="Department" value={intern.department} onChange={handleChange} inputProps={{'data-testid': 'department-input'}}></TextField>
            <TextField required id="primaryNo" label="Primary Number" value={intern.primaryNo} onChange={handleChange} inputProps={{'data-testid': 'primaryNo-input'}}></TextField>
            <Button type="submit" data-testid="update" variant="contained">Update</Button>

            {!isFormValid && (
                <Alert severity="error" sx={{marginTop: 1}}>
                    All fields are mandatory.
                </Alert>
            )}
        </Box>
    );
};

export default EditIntern;