import { useNavigate } from "react-router-dom";
import CentralisedContainerVerticalFlex from "./Containers";
import Form from "./Form";

const AddInternScreen = ({ addHandler }) => {
    const navigate = useNavigate();
    
    const onAddClick = (textFieldRefs) => {
        const newIntern = {name: '', email: '', department: '', primaryNo: ''};
        
        newIntern.name = textFieldRefs[0].current.value;
        newIntern.email = textFieldRefs[1].current.value;
        newIntern.department = textFieldRefs[2].current.value;
        newIntern.primaryNo = textFieldRefs[3].current.value;

        if (Object.values(newIntern).some(value => value == "")) {
            alert("All fields are mandatory");
            return;
        }

        addHandler(newIntern);
        navigate(-1);
    };
    
    return (
        <CentralisedContainerVerticalFlex>
            <Form
                placeholderList={['Name', 'Email', 'Department', 'Primary Number']}
                submitButtonText="Add"
                onSubmitHandler={onAddClick} 
            />
        </CentralisedContainerVerticalFlex>
    );
};

export default AddInternScreen;