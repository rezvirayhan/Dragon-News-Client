import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News";
import PrivetRouts from "./PrivetRouts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-chs90qycr-sagor-rayhans-projects.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRouts>
                    <News></News>
                </PrivetRouts>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-chs90qycr-sagor-rayhans-projects.vercel.app/news/${params.id}`)

            }
        ]
    }
])
export default router;