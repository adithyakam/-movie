import {ADD_MOVIE} from './movieReducer.types'

export const addMovie=(payload)=>{
    return{
        type:ADD_MOVIE,
        payload:payload
    }
}