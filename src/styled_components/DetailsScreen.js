import CentralisedContainerVerticalFlex from "./Containers";
import DetailsCard from "./DetailsCard";

const DetailsScreen = ({ intern }) => {
    return (
        <CentralisedContainerVerticalFlex>
            <DetailsCard intern={intern} />
        </CentralisedContainerVerticalFlex>
    );
};

export default DetailsScreen;