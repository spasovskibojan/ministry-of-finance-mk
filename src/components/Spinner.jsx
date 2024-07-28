import ClipLoader from 'react-spinners/Cliploader'

const override = {
    display: 'block',
    margin: '0 auto'
}
const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color='black'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    );
};

export default Spinner;
