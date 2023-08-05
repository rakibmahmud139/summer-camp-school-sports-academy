import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { login } = useAuth();


    //Login User
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        login(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                if (loggedUser) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
            .catch(err => {
                console.log(err);
            })
    };


    return (
        <div className="hero min-h-screen loginBackground">
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-accent bg-opacity-30">
                <h3 className="text-5xl text-center uppercase pt-5 text-accent">Login!</h3>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                    </div>

                    <input className="btn btn-outline btn-accent mt-6" type="submit" value="Login" />
                </div>
                <p className="text-center pb-4">New Here? <Link to='/signUp' className="text-accent">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;