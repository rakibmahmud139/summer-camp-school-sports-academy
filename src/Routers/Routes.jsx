import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Main from "../Layouts/Main";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'login',
                element: < Login />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <Classes />
            }
        ]
    }
])








export default router;