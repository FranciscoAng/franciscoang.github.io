import { createBrowserRouter } from "react-router-dom"
import LayoutCV from "./layouts/LayoutCV"
import Start from "./views/Start"

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutCV/>,
        children:[
            {
                index: true,
                element: <Start/>
            }
        ]
    }
])

export default router