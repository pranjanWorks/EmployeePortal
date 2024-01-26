import { useLocation, useNavigate } from "react-router-dom";
import CentralisedContainerVerticalFlex from "./Containers";
import Form from "./Form";

const EditInternScreen = ({ updateHandler }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const intern = location.state.data;
    
    const onUpdateClick = (textFieldRefs) => {
        intern.name = textFieldRefs[0].current.value;
        intern.email = textFieldRefs[1].current.value;
        intern.department = textFieldRefs[2].current.value;
        intern.primaryNo = textFieldRefs[3].current.value;

        if (Object.values(intern).some(value => value === "")) {
            alert("All fields are mandatory");
            return;
        }

        updateHandler(intern);
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