import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browser from "./Browser";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import appStore from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_PHOTO } from "../utils/constraint";


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
    const dispatch=useDispatch();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user);
                const {email, displayName}=user;
                // console.log(email);
                updateProfile(auth.currentUser, {
                    displayName: user.displayName, 
                    photoURL: USER_PHOTO,
                    }).then(() => {
                        dispatch(addUser({email:email,displayName:displayName,photoURL:photoURL}));
                        navigate("/browser");
                    // Profile updated!
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    // ...
                });
                
            } else {
                dispatch(removeUser());
                // User is signed out
                // ...
            }
        });
    },[])


    return (
        
        <RouterProvider router={appRouter}></RouterProvider>
        
    )
}
export default Body;