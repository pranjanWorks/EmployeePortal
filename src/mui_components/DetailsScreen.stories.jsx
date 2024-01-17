import interns from "../sample_data/interns";
import DetailsScreen from "./DetailsScreen";

export default {
    component: DetailsScreen,
    title: "DetailsScreen MUI",
    tags: ['autodocs']
};

export const Default = {
    args: {
        item: interns[0]
    }
};