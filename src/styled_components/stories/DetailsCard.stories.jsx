import DetailsCard from "../DetailsCard";
import interns from "../../sample_data/interns";

export default {
    component: DetailsCard,
    title: 'StyledDetailsCard',
    tags: ['autodocs']
};

export const Default = {
    args: {
        intern: interns[0]
    }
};