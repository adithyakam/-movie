import {addSearchMovie,removeSearchMovie}  from "./SearchMovie.types"


const initialState={
    movies:[]
}


const SearchMovieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case addSearchMovie:
            return{
                ...state,
                movies:[...action.payload]
            }
        case removeSearchMovie:return{
            ...state,
            movies:[]
        }
    
        default:return state
    }
}

export default SearchMovieReducer