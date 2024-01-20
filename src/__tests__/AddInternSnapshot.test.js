import renderer from 'react-test-renderer';
import AddIntern from '../mui_components/AddIntern';

it('AddIntern', () => {
    const tree = renderer
        .create(<AddIntern addHandler={() => {}} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});