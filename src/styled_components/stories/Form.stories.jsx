import Form from "../Form";

export default {
    component: Form,
    title: 'Form',
    tags: ['autodocs']
};

export const AddInternForm = {
    args: {
        placeholderList: [
            'Name',
            'Email',
            'Department',
            'Primary Number'
        ],
        submitButtonText: 'Add'
    }
};

export const UpdateInternForm = {
    args: {
        placeholderList: [
            'Name',
            'Email',
            'Department',
            'Primary Number'
        ],
        submitButtonText: 'Update',
        defaultValues: [
            'Pratyush Ranjan',
            'pratyush.ranjan@ringcentral.com',
            'Development',
            '068510 98354'
        ]
    }
};