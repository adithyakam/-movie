import {SELECTED_MOVIE,REMOVE_MOVIE} from './selectedMovie.types'

export const setSelectedMovie=(payload)=>{
    return{
        type:SELECTED_MOVIE,
        payload:payload
    }
}

export const removeSelectedMovie=()=>{
    return{
        type:REMOVE_MOVIE,
       
    }
}