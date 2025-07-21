import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
const App = ()=>{
    return (
        <div>
            <Body/>
        </div>
    )
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

