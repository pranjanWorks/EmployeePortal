import styled from "styled-components";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

const StyledListItemContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 4px;
    margin-bottom: 8px;
`;

const StyledListItemIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: auto;
`;

const StyledListItemText = styled.span`
    font-size: 1.2em;
    font-weight: 500;
    margin-left: 4px;
    cursor: pointer;
`;

const ListItem = ({ intern, deleteHandler }) => {
    const navigate = useNavigate();
    
    return (
        <StyledListItemContainer>
            <Avatar imgUrl="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png" />
            <StyledListItemText onClick={() => navigate(`/details/${intern.id}`)}>{intern.name}</StyledListItemText>
            <StyledListItemIconsContainer>
                <Avatar 
                    imgUrl="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                    onClickHandler={() => deleteHandler(intern.id)}
                />
                <Avatar 
                    imgUrl="https://as2.ftcdn.net/v2/jpg/01/09/40/45/1000_F_109404594_0N0O1Yki0kGrODecWMvVt3qettBtzWtq.jpg"
                    onClickHandler={() =>  navigate(`/edit/${intern.id}`, { state: { data: intern } })}
                />
            </StyledListItemIconsContainer>
        </StyledListItemContainer>
    );
};

export default ListItem;