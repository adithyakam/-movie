import { combineReducers } from "redux";
import movieReducer from "./movieReducer/movieReducer.reducer";
import selectedMovieReducer from "./selectedMovieReducer/selectedMovie.reducer";


const rootReducer =combineReducers({
    movie:movieReducer,
    selctedMovie:selectedMovieReducer
})

export default rootReducer