import styled from "styled-components";
import ListItem from "./ListItem";

const ListViewContainer = styled.div`
    width: fit-content;
    overflow: auto;
    padding: 4px;
`;

const ListView = ({ interns }) => {
    const listItems = interns.map(intern => {
        return <ListItem intern={intern} />
    });

    return (
        <ListViewContainer>
            {listItems}
        </ListViewContainer>
    );
};

export default ListView;