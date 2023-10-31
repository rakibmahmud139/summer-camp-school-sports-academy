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
import MyEnrolledClass from "../Pages/Dashboard/StudentDashBoard/myEnrolledClass/MyEnrolledClass";
import PrivateRoute from "./PrivateRoute";
import AddAClass from "../Pages/Dashboard/instructorDashBoard/AddAClass";
import InstructorsClass from "../Pages/Dashboard/instructorDashBoard/InstructorsClass";
import AdminHome from "../Pages/Dashboard/AdminDashBoard/AdminHome";
import ManageClasses from "../Pages/Dashboard/AdminDashBoard/ManageClasses";
import MangeUser from "../Pages/Dashboard/AdminDashBoard/MangeUser";
import AdminRoutes from "./AdminRoutes";
import MyClass from "../Pages/Dashboard/StudentDashBoard/myClass/MyClass";
import InstructorHome from "../Pages/Dashboard/instructorDashBoard/InstructorHome";
import Payment from "../Pages/Dashboard/StudentDashBoard/myClass/Payment";




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
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        children: [

            //Student Routes
            {
                path: '/dashboard/studentHome',
                element: <PrivateRoute><StudentHome /></PrivateRoute>
            },
            {
                path: '/dashboard/myClass',
                element: <PrivateRoute><MyClass /></PrivateRoute>,
            },
            {
                path: '/dashboard/enrolledClass',
                element: <PrivateRoute><MyEnrolledClass /></PrivateRoute>
            },
            {
                path: '/dashboard/payment',
                element: <PrivateRoute><Payment /></PrivateRoute>
            },

            //Instructor Routes
            {
                path: '/dashboard/instructorHome',
                element: <PrivateRoute><InstructorHome /></PrivateRoute>
            },
            {
                path: '/dashboard/addClass',
                element: <PrivateRoute><AddAClass /></PrivateRoute>
            },
            {
                path: '/dashboard/instructorClass',
                element: <PrivateRoute> <InstructorsClass /></PrivateRoute>
            },

            //Admin Routers
            {
                path: '/dashboard/adminHome',
                element: <PrivateRoute><AdminRoutes><AdminHome /></AdminRoutes></PrivateRoute>
            },
            {
                path: '/dashboard/mangeClass',
                element: <PrivateRoute><AdminRoutes><ManageClasses /></AdminRoutes></PrivateRoute>
            },
            {
                path: '/dashboard/allStudent',
                element: <PrivateRoute><AdminRoutes><MangeUser /></AdminRoutes></PrivateRoute>
            }
        ]
    }
])








export default router;