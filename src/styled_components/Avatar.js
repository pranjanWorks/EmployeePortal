import styled from "styled-components";

const StyledAvatar = styled.img`
    vertical-align: top;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    cursor: pointer;
`;

const Avatar = ({ imgUrl }) => {
    return (
        <StyledAvatar src={imgUrl} alt="Avatar" />
    );
};

export default Avatar;