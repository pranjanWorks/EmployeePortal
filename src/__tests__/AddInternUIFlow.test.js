/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MUIApp from '../mui_components/MUIApp';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter, Route } from 'react-router-dom';

global.Request = jest.fn();

test('Starting from homepage -> adding a new valid intern\
 -> new intern added successfully', async () => {
    const { getByTestId, queryByText } = render(
        <MUIApp />
    );

    const addButton = getByTestId('add-button');
    userEvent.click(addButton);
    expect(screen.getByText('Submit')).toBeInTheDocument();

    const submitButton = getByTestId('submit');
    userEvent.click(submitButton);
    expect(queryByText('All fields are mandatory.')).toBeInTheDocument();

    const nameTextField = getByTestId('name-input');
    const emailTextField = getByTestId('email-input');
    const departmentTextField = getByTestId('department-input');
    const primaryNoTextField = getByTestId('primaryNo-input');

    const newIntern = {
        name: 'Aditya Sharma',
        email: 'aditya.sharma@ringcentral.com',
        department: 'DevOps',
        primaryNo: '068510 98361'
    };

    userEvent.type(nameTextField, newIntern.name);
    userEvent.type(emailTextField, newIntern.email);
    userEvent.type(departmentTextField, newIntern.department);
    userEvent.type(primaryNoTextField, newIntern.primaryNo);

    // const mock = new MockAdapter(axios);
    // mock.onPost('/interns', newIntern).reply(200, { data: newIntern });

    userEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText(newIntern.name)).toBeInTheDocument();
    });

    const deleteIcon = screen.getByTestId(`delete-icon-button-${newIntern.email}`);
    userEvent.click(deleteIcon);
    await waitFor(() => {
        expect(screen.queryByText(newIntern.name)).toBeNull();
    });
});

test('Starting from homepage -> adding an invalid intern\
-> intern not added', async () => {
    const { getByTestId, queryByText } = render(
        <MUIApp />
    );

    await waitFor(() => {
        expect(screen.getByText('Pratyush Ranjan')).toBeInTheDocument();
    });

    const addButton = getByTestId('add-button');
    userEvent.click(addButton);
    expect(screen.getByText('Submit')).toBeInTheDocument();

    const submitButton = getByTestId('submit');

    const nameTextField = getByTestId('name-input');
    const emailTextField = getByTestId('email-input');
    const departmentTextField = getByTestId('department-input');
    const primaryNoTextField = getByTestId('primaryNo-input');

    const newIntern = {
        name: 'Pratyush Ranjan Verma',
        email: 'pratyush.ranjan@ringcentral.com',
        department: 'Development',
        primaryNo: '068510 98361'
    };

    userEvent.type(nameTextField, newIntern.name);
    userEvent.type(emailTextField, newIntern.email);
    userEvent.type(departmentTextField, newIntern.department);
    userEvent.type(primaryNoTextField, newIntern.primaryNo);

    // const mock = new MockAdapter(axios);
    // mock.onPost('/interns', newIntern).reply(200, { data: newIntern });

    userEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText('Pratyush Ranjan')).toBeInTheDocument();
    });
    
    expect(screen.queryByText(newIntern.name)).toBeNull();
});