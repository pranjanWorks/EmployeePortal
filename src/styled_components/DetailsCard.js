import styled from "styled-components";
import DetailsCardItem from "./DetailsCardItem";

const DetailsCardContainerVertical = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 4px;
`;

const DetailsCard = ({ intern }) => {
    return (
        <DetailsCardContainerVertical>
            <DetailsCardItem 
                headerText="Name" 
                primaryText={intern.name}
                avatarURL="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png" 
            />
            <DetailsCardItem
                headerText="Email"
                primaryText={intern.email}
                avatarURL="https://cdn.pixabay.com/photo/2012/04/28/19/00/mail-44042_1280.png" 
            />
            <DetailsCardItem 
                headerText="Department"
                primaryText={intern.department}
                avatarURL="https://media.istockphoto.com/id/1269165852/vector/building-resort-hotel-icon-vector-graphics.webp?s=1024x1024&w=is&k=20&c=MjzkWIGsP8hJKSOmJJBRnA_qtGDPBDHaN6AmlYc7PVI="
            />
            <DetailsCardItem 
                headerText="Primary Number"
                primaryText={intern.primaryNo}
                avatarURL="https://media.istockphoto.com/id/1130588880/vector/black-phone-icon-on-white-background-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=eX4Z2R3VBCalf8UlPafsbBIdCK6ylJJgKiINi49jISI="
            />
        </DetailsCardContainerVertical>
    );
};

export default DetailsCard;