import { combineReducers } from "redux";
import movieReducer from "./movieReducer/movieReducer.reducer";


const rootReducer =combineReducers({
    movie:movieReducer,
})

export default rootReducer