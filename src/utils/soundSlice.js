import { createSlice } from "@reduxjs/toolkit";

const soundSlice= createSlice({
    name:"sound",
    initialState:{
        muteSound:true
    },
    reducers:{
        soundMuteUnMute: (state)=>{
            state.muteSound=!state.muteSound;
        }
    }
})

export const {soundMuteUnMute}=soundSlice.actions;
export default soundSlice.reducer;