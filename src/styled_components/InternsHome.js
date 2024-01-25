import CentralisedContainerVerticalFlex from "./Containers";
import ListView from "./ListView";
import { ButtonContained } from "./Button";

const InternsHome = ({ interns }) => {
    return (
        <CentralisedContainerVerticalFlex>
            <ListView interns={interns} />
            <ButtonContained label="Add Intern" />
        </CentralisedContainerVerticalFlex>
    );
};

export default InternsHome;