import { useLocation, useNavigate } from "react-router-dom";
import CentralisedContainerVerticalFlex from "./Containers";
import Form from "./Form";

const EditInternScreen = ({ updateHandler }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const intern = location.state.data;
    
    const onUpdateClick = (textFields) => {
        const updatedIntern = {name: '', email: '', department: '', primaryNo: ''};
        
        updatedIntern.name = textFields[0].value;
        updatedIntern.email = textFields[1].value;
        updatedIntern.department = textFields[2].value;
        updatedIntern.primaryNo = textFields[3].value;

        if (Object.values(updatedIntern).some(value => value === "")) {
            alert("All fields are mandatory");
            return;
        }

        updateHandler(updatedIntern);
        navigate(-1);
    };
    
    return (
        <CentralisedContainerVerticalFlex>
            <Form
                placeholderList={['Name', 'Email', 'Department', 'Primary Number']}
                submitButtonText="Update"
                onSubmitHandler={onUpdateClick}
                defaultValues={[intern.name, intern.email, intern.department, intern.primaryNo]}
            />
        </CentralisedContainerVerticalFlex>
    );
};

export default EditInternScreen;