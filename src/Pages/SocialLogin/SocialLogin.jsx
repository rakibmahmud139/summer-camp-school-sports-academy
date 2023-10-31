import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    //Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const createUser = res.user;
                const student = { name: createUser.displayName, email: createUser.email }

                fetch('https://sports-academy-server-rakibmahmud139.vercel.app/students', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(student)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sign Up Successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/')
                        }
                    })
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