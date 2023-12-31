import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login User
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    //updateUserProfile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    //On auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set token
            if (currentUser) {
                axios.post('https://sports-academy-server-three.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])





    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;