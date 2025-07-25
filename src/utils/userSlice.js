import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name:"user",
        initialState:null,
        reducers:{
            addUser:(state,action)=>{
                return action.payload;
            },
            removeUser:(state,action)=>{
                return null;
            }

        }
    }
)

export {addUser,removeUser} from userSlice.actions;
export default userSlice.reducer;