import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore"
const App = ()=>{
    return (
        <div>
            <Provider store={appStore}>
            <Body/>
            </Provider>
        </div>
    )
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

