import interns from "../../sample_data/interns";
import EditIntern from "../EditIntern";

export default {
    component: EditIntern,
    title: 'Edit Intern',
    tags: ['autodocs']
};

export const Default  = {
    args: {
        _intern: interns[0],
        editHandler: () => {}
    }
};