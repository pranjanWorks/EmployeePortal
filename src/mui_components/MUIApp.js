import React, { useEffect, useState } from "react";
import api from '../api/interns';
import InternsHome from "./InternsHome";
import AddInternScreen from "./AddInternScreen";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailsScreen from "./DetailsScreen";

const MUIApp = () => {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const getAllInterns = async () => {
            const response = await api.get('/interns');
            if (response.data) setInterns((response).data);
        };
        getAllInterns();
    }, []);

    const addInternHandler = async (newIntern) => {
        const response = await api.post('/interns', newIntern);
        setInterns([...interns, response.data]);
    };

    const deleteInternHandler = async (id) => {
        await api.delete(`/interns/${id}`);
        const newInterns = interns.filter(intern => {
            return intern.id !== id;
        });
        setInterns(newInterns);
    };

    const router = createBrowserRouter([
        {
          path: "/",
          element: <InternsHome interns={interns} deleteHandler={deleteInternHandler} />
        },
        {
          path: "/add",
          element: <AddInternScreen addHandler={addInternHandler} />
        },
        {
            path: "/details/:id",
            element: <DetailsScreen />

        }
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default MUIApp;