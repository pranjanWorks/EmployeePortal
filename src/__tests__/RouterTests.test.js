/**
 * @jest-environment jsdom
 */

import InternsHome from '../mui_components/InternsHome';
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
});