import {ADD_MOVIE} from './movieReducer.types'


const initialState = {
    movie:[]
}

const movieReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_MOVIE:return{
            ...state,
            movie:[...action.payload.results]
        }

         default:return state
    }


    
}

export default movieReducer