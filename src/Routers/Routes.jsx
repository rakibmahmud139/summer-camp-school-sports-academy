import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Main from "../Layouts/Main";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Layouts/DashBoard";
import StudentHome from "../Pages/Dashboard/StudentDashBoard/studentHome/StudentHome";
import MyClass from "../Pages/Dashboard/StudentDashBoard/myClass/Myclass";
import MyEnrolledClass from "../Pages/Dashboard/StudentDashBoard/myEnrolledClass/MyEnrolledClass";




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
    },
    {
        path: '/dashboard',
        element: <DashBoard />,
        children: [

            //Student Routes
            {
                path: '/dashboard/studentHome',
                element: <StudentHome />
            },
            {
                path: '/dashboard/myClass',
                element: <MyClass />
            },
            {
                path: '/dashboard/enrolledClass',
                element: <MyEnrolledClass />
            }
        ]
    }
])








export default router;