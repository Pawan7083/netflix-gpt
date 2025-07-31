import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"movies",
        initialState: {
            nowPlayingMovies : null,
            topRatedMovies : null,
            popularMovies : null,
            upComingMovies : null,
            titleMovies:null,
        },
        reducers : {
            addNowPlayingMovie : (state,action) =>{
                state.nowPlayingMovies=action.payload;
            },

            addTopRatedMovies : (state,action)=>{
                state.topRatedMovies=action.payload;
            },

            addPopularMovies : (state,action)=>{
                state.popularMovies=action.payload;
            },

            addUpComingMovies : (state,action)=>{
                state.upComingMovies=action.payload;
            },
            addTitleMovies:(state,action)=>{
                state.titleMovies=action.payload;
            }
        }
    }
)

export const {addNowPlayingMovie , addPopularMovies , addTopRatedMovies, addUpComingMovies ,addTitleMovies}=movieSlice.actions;

export default movieSlice.reducer;