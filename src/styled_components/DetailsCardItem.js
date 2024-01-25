import styled from "styled-components";
import Avatar from "./Avatar";

const StyledDetailsCardItemContainerHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const StyledDetailsCardItemContainerVertical = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 4px;
`;

const StyledDetailsCardItemHeader = styled.p`
    font-size: 0.5em;
    color: gray;
`;

const StyledDetailsCardItemPrimaryText = styled.span`
    font-size: 1em;
    font-weight: 500;
`;

const AvatarImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

const DetailsCardItem = ({ headerText, primaryText, avatarURL }) => {
    return (
        <StyledDetailsCardItemContainerHorizontal>
        
            <Avatar imgUrl={avatarURL} />
            
            <StyledDetailsCardItemContainerVertical>
                <StyledDetailsCardItemHeader>{headerText}</StyledDetailsCardItemHeader>
                <StyledDetailsCardItemPrimaryText>{primaryText}</StyledDetailsCardItemPrimaryText>
            
            </StyledDetailsCardItemContainerVertical>
        </StyledDetailsCardItemContainerHorizontal>
    );
};

export default DetailsCardItem;