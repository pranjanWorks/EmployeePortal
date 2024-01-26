import { useEffect, useState } from "react";
import api from '../api/interns';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InternsHome from "./InternsHome";
import AddInternScreen from "./AddInternScreen";
import EditInternScreen from "./EditInternScreen";
import DetailsScreen from "./DetailsScreen";

const SCApp = () => {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const getAllInterns = async () => {
            const response = await api.get("/interns");
            if (response.data) setInterns(response.data);
        };
        getAllInterns();
    }, []);

    const addInternHandler = async (newIntern) => {
        const response = await api.post("/interns", newIntern);
        setInterns([...interns, {...response.data}]);
    };

    const updateInternHandler = async (intern) => {
        const response = await api.put(`/interns/${intern.id}`, intern);
        const id = intern.id;
        setInterns(interns.map(intern => {
            return intern.id !== id ? intern : response.data; // !!check
        }));
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
            path: '/edit/:id',
            element: <EditInternScreen updateHandler={updateInternHandler} />
        },
        {
            path: '/details/:id',
            element: <DetailsScreen />
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default SCApp;