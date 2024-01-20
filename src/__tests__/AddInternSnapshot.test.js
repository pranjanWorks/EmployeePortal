import renderer from 'react-test-renderer';
import AddIntern from '../mui_components/AddIntern';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

it('AddIntern', () => {
    const tree = renderer
        .create(<AddIntern addHandler={() => {}} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});