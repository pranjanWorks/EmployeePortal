import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";
import api from '../api/interns';

const DetailsScreen = () => {
    const { id } = useParams();
    const [intern, setIntern] = useState({});

    useEffect(() => {
        const getInternById = async (id) => {
            const response = await api.get('/interns/'+id);
            setIntern(response.data);
        };
        getInternById(id);
    }, [id]);
    
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <DetailsCard item={intern} />
        </Box>
    );
};

export default DetailsScreen;