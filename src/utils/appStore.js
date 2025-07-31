import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import soundReducer from "./soundSlice";

const appStore = configureStore(
    {
        reducer : {
            user:userReducer,
            movies:moviesReducer,
            sound:soundReducer,
        }
    }

)

export default appStore;