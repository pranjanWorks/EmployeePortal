import styled from "styled-components";

const FlexVerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 0.5em;
    box-shadow: 4px;
`;

const FlexHorizontalContainer = styled(FlexVerticalContainer)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export {
    FlexHorizontalContainer,
    FlexVerticalContainer,
};