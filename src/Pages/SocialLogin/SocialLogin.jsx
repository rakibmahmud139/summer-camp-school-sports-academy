import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleLogin } = useAuth();

    //Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="mb-4">
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-accent">Sign with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;