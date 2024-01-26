import TextField from "./TextField";
import { ButtonContained } from "./Button";
import styled from "styled-components";
import { useRef } from "react";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 25ch;
`;

const getTextFieldRefs = (length) => {
    return Array.from({length}, () => useRef(null));
};

const Form = ({ 
    placeholderList, 
    submitButtonText, 
    onSubmitHandler,
    defaultValues = [],  
}) => {
    if (defaultValues.length !== placeholderList.length) {
        defaultValues = Array(placeholderList.length).fill('');
    }

    const textFieldRefs = getTextFieldRefs(placeholderList.length);
    const textFields = placeholderList.map((placeholder, idx) => {
        return <TextField 
                    key={placeholder} 
                    ref={textFieldRefs[idx]} 
                    value={defaultValues[idx]} 
                    placeholder={placeholder} 
                />
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(textFieldRefs);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {textFields}
            <ButtonContained type="submit" label={submitButtonText} />
        </StyledForm>
    );
};

export default Form;