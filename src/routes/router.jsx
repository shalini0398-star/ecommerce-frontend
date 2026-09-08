import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import Home from '../pages/home/Home.jsx'
import Login from '../pages/login/Login.jsx'
import Register from '../pages/Register/Register.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                index:true,
                element:<Home/>
            },{
                path:"/login",
                element:<Login/>
            },{
                path:"/register",
                element:<Register/>
            }
        ]

    }
])

export default router;