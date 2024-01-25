import interns from "../../sample_data/interns";
import InternsHome from "../InternsHome";

export default {
    component: InternsHome,
    title: 'StyledInternsHome',
    tags: ['autodocs']
};

export const Default = {
    args: {
        interns: interns
    }
};