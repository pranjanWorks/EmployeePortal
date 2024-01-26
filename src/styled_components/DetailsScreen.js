import { useParams } from "react-router-dom";
import CentralisedContainerVerticalFlex from "./Containers";
import DetailsCard from "./DetailsCard";
import { useEffect, useState } from "react";
import api from '../api/interns';

const DetailsScreen = () => {
    const { id } = useParams();
    const [intern, setIntern] = useState({});

    useEffect(() => {
        const getInternById = async () => {
            const response = await api.get(`/interns/${id}`);
            setIntern(response.data);
        }
        getInternById();
    });
    
    return (
        <CentralisedContainerVerticalFlex>
            <DetailsCard intern={intern} />
        </CentralisedContainerVerticalFlex>
    );
};

export default DetailsScreen;