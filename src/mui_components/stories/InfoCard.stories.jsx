import InfoCard from "../InfoCard";
import interns from "../../sample_data/interns";

export default {
    component: InfoCard,
    title: 'Info Card MUI',
    tags: ['autodocs']
};

export const Default = {
    args: {
        item: interns[0]
    }
};