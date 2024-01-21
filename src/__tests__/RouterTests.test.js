/**
 * @jest-environment jsdom
 */

import InternsHome from '../mui_components/InternsHome';
import AddIntern from '../mui_components/AddIntern';
import { fireEvent, render } from '@testing-library/react';
import interns from '../sample_data/interns';
import '@testing-library/jest-dom'
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import EditIntern from '../mui_components/EditIntern';

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

    it('Invoke addHandler and Route back from AddInternScreen \
        upon successful form submission in AddIntern', () => {
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

    it('Do not invoke addHandler when any field is empty in \
        addIntern, and display alert', () => {
        const mockAddHandler = jest.fn();

        const intern = {
            name: 'Gautum Rizwani',
            email: 'gautum.rizwani@ringcentral.com',
            department: 'Development',
            primaryNo: '068510 98361'
        };

        const { getByTestId, queryByText } = render(<AddIntern addHandler={mockAddHandler} />);
        const nameTextField = getByTestId('name-input');
        const emailTextField = getByTestId('email-input');
        const primaryNoTextField = getByTestId('primaryNo-input');
        const submitButton = getByTestId("submit");

        fireEvent.change(nameTextField, {target: {value: intern.name}});
        fireEvent.change(emailTextField, {target: {value: intern.email}});
        fireEvent.change(primaryNoTextField, {target: {value: intern.primaryNo}});

        fireEvent.click(submitButton);
        expect(queryByText('All fields are mandatory.')).toBeInTheDocument();
        expect(mockAddHandler).not.toHaveBeenCalled();
    });

    it('Invoke editHandler and Route back from EditInternScreen \
        upon successful form submission in EditIntern', () => {
        const mockEditHandler = jest.fn();

        const intern = {
            id: "0d2a",
            name: "Yuvraj Sharma",
            email: "yuvraj.sharma@ringcentral.com",
            department: "Development",
            primaryNo: "068510 88344"
          };

        const routes = [{
            path: '/edit/:id',
            element: <EditIntern editHandler={mockEditHandler} />
        }];

        const router = createMemoryRouter(routes, {
            initialEntries: [{pathname: `/edit/${intern.id}`, state: intern}],
            initialIndex: 0
        });

        const { getByTestId } = render(<RouterProvider router={router} />);

        const updateButton = getByTestId('update');
        fireEvent.click(updateButton);
        expect(mockEditHandler).toHaveBeenCalledWith(intern); // ??
        expect(mockUseNavigate).toHaveBeenCalledWith(-1);
    });

    it('Do not invoke addHandler when any field is empty in \
        addIntern, and display alert', () => {
        const mockEditHandler = jest.fn();

        const intern = {
            id: "0d2a",
            name: "Yuvraj Sharma",
            email: "yuvraj.sharma@ringcentral.com",
            department: "Development",
            primaryNo: "068510 88344"
            };

        const routes = [{
            path: '/edit/:id',
            element: <EditIntern editHandler={mockEditHandler} />
        }];

        const router = createMemoryRouter(routes, {
            initialEntries: [{pathname: `/edit/${intern.id}`, state: intern}],
            initialIndex: 0
        });

        const { getByTestId, queryByText } = render(<RouterProvider router={router} />);

        const nameTextField = getByTestId('name-input');
        const updateButton = getByTestId('update');

        fireEvent.change(nameTextField, {target: {value: ''}});
        fireEvent.click(updateButton);

        expect(mockEditHandler).not.toHaveBeenCalled();
        expect(queryByText('All fields are mandatory.')).toBeInTheDocument();
    });
});