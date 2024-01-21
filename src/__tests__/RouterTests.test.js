/**
 * @jest-environment jsdom
 */

import InternsHome from '../mui_components/InternsHome';
import AddIntern from '../mui_components/AddIntern';
import { fireEvent, render } from '@testing-library/react';
import interns from '../sample_data/interns';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Routing Tests', () => {
    it('Route to "/add" on Fab icon click', () => {
        const { getByTestId } = render(
            <InternsHome interns={interns} deleteHandler={() => {}} />
        );
        const fabButton = getByTestId("add-button");
        fireEvent.click(fabButton);
        expect(mockUseNavigate).toHaveBeenCalledWith("/add");
    });

    it('Route back from AddInternScreen upon successful form submission', () => {
        const mockAddHandler = jest.fn();

        const intern = {
            name: 'Gautum Rizwani',
            email: 'gautum.rizwani@ringcentral.com',
            department: 'Development',
            primaryNo: '068510 98361'
        };
        
        const { getByTestId } = render(<AddIntern addHandler={mockAddHandler} />);
        const nameTextField = getByTestId('name-input');
        const emailTextField = getByTestId('email-input');
        const departmentTextField = getByTestId('department-input');
        const primaryNoTextField = getByTestId('primaryNo-input');
        const submitButton = getByTestId("submit");

        fireEvent.change(nameTextField, {target: {value: intern.name}});
        fireEvent.change(emailTextField, {target: {value: intern.email}});
        fireEvent.change(departmentTextField, {target: {value: intern.department}});
        fireEvent.change(primaryNoTextField, {target: {value: intern.primaryNo}});

        fireEvent.click(submitButton);
        expect(mockAddHandler).toHaveBeenCalledWith(intern);
        expect(mockUseNavigate).toHaveBeenCalledWith(-1);
    });
});