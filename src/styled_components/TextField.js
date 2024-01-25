import styled from "styled-components";

const StyledTextField = styled.input`
    padding: 0.5em;
    margin-bottom: 1em;
    border: 2px solid #2872c6;
    border-radius: 0.5em;
`;

const TextField = (props) => {
    return <StyledTextField type="text" value={props.value} placeholder={props.placeholder} />
};

export default TextField;