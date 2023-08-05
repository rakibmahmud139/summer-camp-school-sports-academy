import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h3>Error Page</h3>

            <button className="btn btn-outline btn-accent"><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;