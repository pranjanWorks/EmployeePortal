import interns from "../../sample_data/interns";
import EditInternScreen from "../EditInternScreen";

export default {
    component: EditInternScreen,
    title: 'StyledEditInternScreen',
    tags: ['autodocs']
};

export const Default = {
    args: {
        intern: interns[0]
    }
};