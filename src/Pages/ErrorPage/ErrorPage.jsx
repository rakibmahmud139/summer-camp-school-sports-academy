import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center relative">
            <img className="w-full h-[740px]" src="https://i.ibb.co/TYmNmkn/images-2.png" alt="" />

            <button className="btn btn-accent absolute top-[640px]"><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;