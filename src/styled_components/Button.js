import styled from "styled-components";

const StyledButtonContained = styled.button`
    display: flex;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #2872c6;
    border-radius: 0.5em;
    background-color: #2872c6;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const StyledButtonOutlined = styled(StyledButtonContained)`
    background-color: white;
    color: #2872c6;
`;

const ButtonContained = (props) => {
    return <StyledButtonContained type={props.type ? props.type : "button"} props={props}>{props.label}</StyledButtonContained>
};

const ButtonOutlined = (props) => {
    return <StyledButtonOutlined type={props.type ? props.type : "button"} props={props}>{props.label}</StyledButtonOutlined>
};

export { ButtonContained, ButtonOutlined };