import CentralisedContainerVerticalFlex from "./Containers";
import ListView from "./ListView";
import { ButtonContained } from "./Button";
import { useNavigate } from "react-router-dom";

const InternsHome = ({ interns, deleteHandler }) => {
    const navigate = useNavigate();
    
    return (
        <CentralisedContainerVerticalFlex>
            <ListView interns={interns} deleteHandler={deleteHandler} />
            <ButtonContained 
                label="Add Intern" 
                onClick={() => navigate("/add")} 
            />
        </CentralisedContainerVerticalFlex>
    );
};

export default InternsHome;