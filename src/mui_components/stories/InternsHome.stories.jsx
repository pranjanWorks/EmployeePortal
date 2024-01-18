import InternsHome from "../InternsHome";
import interns from '../../sample_data/interns';

export default {
    component: InternsHome,
    title: 'Interns Home MUI',
    tags: ['autodocs']
};

export const Default = {
    args: {
        interns: interns
    }
};