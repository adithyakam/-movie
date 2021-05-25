import {SELECTED_MOVIE,REMOVE_MOVIE} from './selectedMovie.types'

const initialState={
    selectedMovie:{
        adult: false,
        backdrop_path: '/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
        genre_ids: [
          28,
          53,
          10752
        ],
        id: 567189,
        original_language: 'en',
        original_title: 'Tom Clancy\'s Without Remorse',
        overview: 'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
        popularity: 2235.578,
        poster_path: '/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
        release_date: '2021-04-29',
        title: 'Tom Clancy\'s Without Remorse',
        video: false,
        vote_average: 7.2,
        vote_count: 988
      }
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