import { LANDING_IMG } from "../utils/constraint";
import { useState ,useRef} from "react";

const Login = ()=>{

    const [signStatus, setSignStatus]= useState(true);

    const handleSignStatus= ()=>{
        setSignStatus(!signStatus);
    }

    const name=useRef();
    const email=useRef();
    const password=useRef();
    console.log(email );

    return(
        <div className="relative">
            <div className="absolute">
                <img src={LANDING_IMG} alt="Image not found" className="w-screen h-screen object-cover"></img>
            </div>
            
                <div className="absolute w-4/12 bg-gray-950 my-24 mx-120 text-white p-4 rounded-2xl opacity-90">
                    <h1 className="font-bold text-3xl m-6 text-white">{signStatus?"Sign In":"Sign Up"}</h1>
                    <form >
                        {!signStatus && <input ref={name} type="text" placeholder="Enter your name" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>}
                        <input ref={email} type="email" placeholder="Enter your email" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>
                        <input ref={password} type="password" placeholder="Enter your password" className="mx-6 my-2 p-4 w-10/12 border-[0.5px] rounded-l"/>
                        <button className=" bg-red-700 mx-6 my-2 p-2 cursor-pointer w-10/12 border-[0.5px] rounded-l">Submit</button>
                        <button className="  mx-6 my-2 p-2 cursor-pointer w-10/12 ">forgot password?</button>
                        <div onClick={handleSignStatus} className=" mx-6 my-2 p-2 cursor-pointer w-10/12 underline text-xl">{signStatus? "new to netflix? Sign Up":"already account? Sign In"}</div>
                        
                        
                    </form>
                </div>
            
        </div>
    )
}
export default Login;