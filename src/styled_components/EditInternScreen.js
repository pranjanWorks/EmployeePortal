import CentralisedContainerVerticalFlex from "./Containers";
import Form from "./Form";

const EditInternScreen = ({ intern }) => {
    return (
        <CentralisedContainerVerticalFlex>
            <Form
                placeholderList={['Name', 'Email', 'Department', 'Primary Number']}
                submitButtonText="Update"
                defaultValues={[intern.name, intern.email, intern.department, intern.primaryNo]}
            />
        </CentralisedContainerVerticalFlex>
    );
};

export default EditInternScreen;