import { useDispatch, useSelector } from "react-redux";
import { LANDING_IMG, LOGO_IMG, USER_PHOTO } from "../utils/constraint";
import { auth } from "../utils/firebase.config";
import { Link, useNavigate } from "react-router";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ()=>{
    const navigate= useNavigate();

    const user=useSelector((store)=>store.user);
     const dispatch=useDispatch();
    
        useEffect(()=>{
            const unScriber = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // console.log(user);
                    const {email, displayName,photoURL}=user;
                    dispatch(addUser({email:email,displayName:displayName , photoURL:photoURL}))
                    navigate("/browser")
                    
                } else {
                    dispatch(removeUser());
                    navigate("/");
                    
                }
            });

        }
        
        ,[])
    console.log(user);

    const handleSignOut= () =>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        // An error happened.
        });
    }

    return (
        <div className="absolute z-50 w-screen bg-gradient-to-b from-black flex justify-between">
            <div>
                <Link to={"/"}><img src={LOGO_IMG} alt="logo image not found" className="w-48 h-20 "></img></Link>
            </div>
            {user &&

            <div className="flex justify-between items-center text-white m-4">
                <Link to={"/gptSearch"}><button className="px-4 py-2 rounded-lg border bg-fuchsia-900 mx-6 cursor-pointer">GPT Search</button></Link>
                <img src={USER_PHOTO} className="w-12 h-12 rounded"></img>
                <span className="text-center items-center">{user.displayName}</span>
                <button onClick={handleSignOut} className="m-2 p-2 border-1 rounded">Logout</button>
            </div>
            }
        </div>
    )
}
export default Header;