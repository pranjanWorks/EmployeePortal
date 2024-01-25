import TextField from "./TextField";
import { ButtonContained } from "./Button";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 25ch;
`;

const Form = ({ 
    placeholderList, 
    submitButtonText, 
    defaultValues = [], 
    onSubmitHandler = () => {} 
}) => {
    if (defaultValues.length !== placeholderList.length) {
        defaultValues = Array(placeholderList.length).fill('');
    }
    const textFields = placeholderList.map((placeholder, idx) => {
        return <TextField value={defaultValues[idx]} placeholder={placeholder} />
    });

    return (
        <StyledForm onSubmit={onSubmitHandler}>
            {textFields}
            <ButtonContained type="submit" label={submitButtonText} />
        </StyledForm>
    );
};

export default Form;