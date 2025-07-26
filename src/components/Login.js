import { LANDING_IMG, USER_PHOTO } from "../utils/constraint";
import { useState ,useRef} from "react";
import Header from "./Header";
import checkValid from "../utils/checkValid";
import { auth } from "../utils/firebase.config";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = ()=>{
    const navigate=useNavigate();
    const dispatch= useDispatch();

    const [signStatus, setSignStatus]= useState(true);

    const handleSignStatus= ()=>{
        setSignStatus(!signStatus);
    }
   

    const name=useRef();
    const email=useRef(null);
    const password=useRef(null);
    // console.log(email );
    // console.log(password );

    const handlerSubmitButton =()=>{
        console.log(email.current.value );
    console.log(password.current.value );

        const validate=checkValid(email.current.value ,password.current.value )
        // console.log(validate);
        if(validate!==null)return;
        if(!signStatus){
            createUserWithEmailAndPassword(auth, email.current.value ,password.current.value )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_PHOTO
                        }).then(() => {
                        // Profile updated!
                        const {email,displayName,photoURL}=auth.currentUser;
                        dispatch(addUser({email:email,displayName:displayName,photoURL:photoURL}))
                        navigate("/browser");
                        // ...
                        }).catch((error) => {
                            console.log(error);
                        // An error occurred
                        // ...
                    });
                })
                .catch((error) => {
                   console.log(error);
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value ,password.current.value )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(addUser({email:user.email,displayName:user.displayName}))
                    navigate("/browser");
                    
                })
                .catch((error) => {
                    console.log(error);
                   
                });

                
        }
    }

    return(
        <div className="">
            <Header/>
            <div className="absolute">
                <img src={LANDING_IMG} alt="Image not found" className="w-screen h-screen object-cover"></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute w-4/12 bg-gray-950 my-30 mx-120 text-white p-4 rounded-2xl opacity-90">
                
                <h1 className="font-bold text-3xl m-6 text-white">{signStatus?"Sign In":"Sign Up"}</h1>
                {!signStatus && <input ref={name} type="text" placeholder="Enter your name" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>}
                
                <input ref={email} type="email" placeholder="Enter your email" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>
                
                <input ref={password} type="password" placeholder="Enter your password" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>
                <div className="font-bold text-xs text-red-600 text-center">Password contain specail character</div>
                
                <button onClick={handlerSubmitButton} className=" bg-red-700 mx-6 my-2 p-2 cursor-pointer w-10/12 border-[0.5px] rounded-l">Submit</button>
                
                <button className="  mx-6 my-2 p-2 cursor-pointer w-10/12 ">forgot password?</button>
                <div onClick={handleSignStatus} className=" mx-6 my-2 p-2 cursor-pointer w-10/12 underline text-xl">{signStatus? "new to netflix? Sign Up":"already account? Sign In"}</div>
                
                
            </form>
               
            
        </div>
    )
}
export default Login;