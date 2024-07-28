import { Link } from 'react-router-dom';
import './styles/NotFoundPage.css';  // Make sure to create this CSS file for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="home-link">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
