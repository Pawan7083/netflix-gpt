import { useSelector } from "react-redux";
import { LANDING_IMG, LOGO_IMG, USER_PHOTO } from "../utils/constraint";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";

const Header = ()=>{
    const navigate= useNavigate();

    const user=useSelector((store)=>store.user);
    console.log(user);

    const handleSignOut= () =>{
        signOut(auth).then(() => {
            navigate("/")
        // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        // An error happened.
        });
    }

    return (
        <div className="absolute z-50 w-screen bg-gradient-to-b from-black flex justify-between">
            <div>
                <img src={LOGO_IMG} alt="logo image not found" className="w-48 h-20 "></img>
            </div>
            {user &&<div className="flex justify-between items-center text-white m-4">
                <img src={USER_PHOTO} className="w-12 h-12 rounded"></img>
                <span className="text-center items-center">{user.displayName}</span>
                <button onClick={handleSignOut} className="m-2 p-2 border-1 rounded">Logout</button>
            </div>
            }
        </div>
    )
}
export default Header;