import styled from "styled-components";
import ListItem from "./ListItem";

const ListViewContainer = styled.div`
    width: fit-content;
    overflow: auto;
    padding: 4px;
`;

const ListView = ({ interns, deleteHandler }) => {
    const listItems = interns.map(intern => {
        return <ListItem key={intern.id} intern={intern} deleteHandler={deleteHandler} />
    });

    return (
        <ListViewContainer>
            {listItems}
        </ListViewContainer>
    );
};

export default ListView;