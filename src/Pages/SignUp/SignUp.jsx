import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [error, setError] = useState();


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;

        if (password !== confirmPassword) {
            return setError('your password and confirm password not match')
        }

        if (password.length === 6) {
            return setError("is less than 6 characters")
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return setError("don't have a special character")
        }

        if (!/(?=.*[A-Z])/.test(password)) {
            return setError("don't have a capital letter")
        }

        createUser(email, password)
            .then(res => {
                const createUser = res.user;
                updateUserProfile(name, photo)
                    .then(res => {
                        if (createUser) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sign Up Successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                console.log(createUser);
                form.reset('');
                setError('');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero min-h-screen loginBackground">
            <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-accent bg-opacity-30">
                <p className="text-center text-red-600 mt-4">{error}</p>
                <h3 className="text-5xl text-center uppercase pt-5 text-accent">Sign Up!</h3>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                    </div>
                    <input className="btn btn-outline btn-accent mt-6" type="submit" value="Sign Up" />
                </div>
                <p className="text-center pb-4">Have an account? <Link to='/login' className="text-accent">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;