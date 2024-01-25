import CentralisedContainerVerticalFlex from "./Containers";
import Form from "./Form";

const AddInternScreen = () => {
    return (
        <CentralisedContainerVerticalFlex>
            <Form
                placeholderList={['Name', 'Email', 'Department', 'Primary Number']}
                submitButtonText="Add" 
            />
        </CentralisedContainerVerticalFlex>
    );
};

export default AddInternScreen;