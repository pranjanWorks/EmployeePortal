import interns from "../../sample_data/interns";
import DetailsScreen from "../DetailsScreen";

export default {
    component: DetailsScreen,
    title: 'StyledDetailsScreen',
    tags: ['autodocs']
};

export const Default = {
    args: {
        intern: interns[0]
    }
};