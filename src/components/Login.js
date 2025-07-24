import { LANDING_IMG } from "../utils/constraint";
import { useState ,useRef} from "react";
import Header from "./Header";
import checkValid from "../utils/checkValid";
import { auth } from "../utils/firebase.config";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";

const Login = ()=>{

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
        console.log(validate);
        if(validate!==null)return;
        if(!signStatus){
            createUserWithEmailAndPassword(auth, email.current.value ,password.current.value )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    // ...
                })
                .catch((error) => {
                   console.log(error);
                });

             name.current.value="";
             email.current.value="";
             password.current.value="";
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value ,password.current.value )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

                email.current.value="";
                password.current.value="";
                // email.current.value="";
                console.log(email.current.value);
        }
    }

    return(
        <div className="">
            {/* <Header/> */}
            <div className="absolute">
                <img src={LANDING_IMG} alt="Image not found" className="w-screen h-screen object-cover"></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute w-4/12 bg-gray-950 my-30 mx-120 text-white p-4 rounded-2xl opacity-90">
                
                <h1 className="font-bold text-3xl m-6 text-white">{signStatus?"Sign In":"Sign Up"}</h1>
                {!signStatus && <input ref={name} type="text" placeholder="Enter your name" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>}
                
                <input ref={email} type="email" placeholder="Enter your email" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>
                
                <input ref={password} type="password" placeholder="Enter your password" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>
                <span>Password should contain specail character .</span>
                
                <button onClick={handlerSubmitButton} className=" bg-red-700 mx-6 my-2 p-2 cursor-pointer w-10/12 border-[0.5px] rounded-l">Submit</button>
                
                <button className="  mx-6 my-2 p-2 cursor-pointer w-10/12 ">forgot password?</button>
                <div onClick={handleSignStatus} className=" mx-6 my-2 p-2 cursor-pointer w-10/12 underline text-xl">{signStatus? "new to netflix? Sign Up":"already account? Sign In"}</div>
                
                
            </form>
               
            
        </div>
    )
}
export default Login;