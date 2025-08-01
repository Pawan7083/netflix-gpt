import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browser from "./Browser";
import GptSearchPage from "./GptSearchPage";

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        },
        {
            path:"/gptSearch",
            element:<GptSearchPage/>
        }
    ]
)


const Body = ()=>{
   
    return (
        
        <RouterProvider router={appRouter}></RouterProvider>
        
    )
}
export default Body;