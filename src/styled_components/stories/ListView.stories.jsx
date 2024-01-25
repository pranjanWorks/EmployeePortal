import interns from "../../sample_data/interns";
import ListView from "../ListView";

export default {
    component: ListView,
    title: 'StyledListView',
    tags: ['autodocs']
};

export const Default = {
    args: {
        interns: interns,
    }
};