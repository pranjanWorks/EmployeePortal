import interns from "../../sample_data/interns";
import ListItem from "../ListItem";

export default {
    component: ListItem,
    title: 'StyledListItem',
    tags: ['autodocs']
};

export const Default = {
    args: {
        intern: interns[0]
    }
};