import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    //Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="mb-4">
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-accent"><FaGoogle className="text-2xl text-red-400" />Sign with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;