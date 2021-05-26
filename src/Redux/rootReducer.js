import { combineReducers } from "redux";
import movieReducer from "./movieReducer/movieReducer.reducer";
import selectedMovieReducer from "./selectedMovieReducer/selectedMovie.reducer";
import SearchMovieReducer from './searchMovie/SearchMovie.reducer'



const rootReducer =combineReducers({
    movie:movieReducer,
    selctedMovie:selectedMovieReducer,
    movies:SearchMovieReducer
    
})

export default rootReducer