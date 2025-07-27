import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browser from "./Browser";

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ]
)


const Body = ()=>{
   
    return (
        
        <RouterProvider router={appRouter}></RouterProvider>
        
    )
}
export default Body;