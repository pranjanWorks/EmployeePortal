import renderer from 'react-test-renderer';
import DetailsCard from '../mui_components/DetailsCard';
import interns from '../sample_data/interns';

it('Details Card', () => {
    const intern = interns[0];
    const tree = renderer
        .create(<DetailsCard item={intern} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});