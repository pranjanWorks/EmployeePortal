import ListView from "./ListView";
import interns from "../sample_data/interns";

export default {
    component: ListView,
    title: 'ListView MUI',
    tags: ['autodocs']
};

export const Default = {
    args: {
        items: interns
    }
};