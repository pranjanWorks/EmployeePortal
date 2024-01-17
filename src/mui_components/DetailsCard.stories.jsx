import interns from "../sample_data/interns";
import DetailsCard from "./DetailsCard";

export default {
    component: DetailsCard,
    title: 'Details Card MUI',
    tags: ['autodocs']
};

export const Default = {
    args: {
        item: interns[0]
    }
};