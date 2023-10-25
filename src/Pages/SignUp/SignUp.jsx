import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;

        if (password !== confirmPassword) {
            return toast.error('your password and confirm password not match')
        }

        if (password.length === 6) {
            return toast.error("is less than 6 characters")
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return toast.error("don't have a special character")
        }

        if (!/(?=.*[A-Z])/.test(password)) {
            return toast.error("don't have a capital letter")
        }

        createUser(email, password)
            .then(res => {
                const createUser = res.user;
                updateUserProfile(name, photo)
                    .then(res => {
                        if (createUser) {
                            const student = { name: createUser.displayName, email: createUser.email }

                            fetch('http://localhost:5000/students', {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(student)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        toast.success('Register Successful!!')
                                        form.reset('');
                                        navigate('/')
                                    }
                                })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero min-h-screen loginBackground">
            <Helmet
            >
                <title>sportsAcademy | SignUp</title>
            </Helmet>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-accent bg-opacity-30">
                <form onSubmit={handleSignUp} >
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
                            <input type="text" name="photo" className="file-input file-input-bordered file-input-accent w-3/4" required />
                        </div>
                        <input className="btn btn-outline btn-accent mt-6" type="submit" value="Sign Up" />
                    </div>
                    <p className="text-center pb-4">Have an account? <Link to='/login' className="text-accent">Login</Link></p>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;