import {addSearchMovie,removeSearchMovie}  from "./SearchMovie.types"


export const addSearchedMovie=(payload)=>{
    return{
        type:addSearchMovie,
        payload:payload,
    }
}


export const removeSearchedMovie=()=>{
    return{
        type:removeSearchMovie,
        
    }
}