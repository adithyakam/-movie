import {SELECTED_MOVIE,REMOVE_MOVIE} from './selectedMovie.types'

const initialState={
    selectedMovie:{}
}

const selectedMovieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_MOVIE:
            return{
                selectedMovie:action.payload
            }
        case REMOVE_MOVIE: 
            return{
                selectedMovie:{}
            }
        
            
    
        default:return state
            
    }
}

export default selectedMovieReducer