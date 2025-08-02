import { LANDING_IMG } from "../utils/constraint";

const GptSearchPage = ()=>{

    return (
        <div>
            <img src={LANDING_IMG} className="w-screen h-screen absolute"></img>
            <input type="text" className="w-1/2 p-2 border border-gray-500"/>
            <button className="px-4 py-2 bg-gray-400">Search</button>
        </div>
    )
}

export default GptSearchPage;