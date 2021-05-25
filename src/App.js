import logo from './logo.svg';
import './App.css';
import RowContainer from './Component/RowContainer/RowContainer';
import SearchResult from './Component/SearchResult/SearchResult'


import Header from './Component/Header/Header';
import { connect } from 'react-redux';
import MovieDetails from './Component/MovieDetails/MovieDetails';

function App(props) {

  const {movie,selectedMovie}=props

  // console.log(selectedMovie);
  return (
    <div className="App">
      <Header/>
      {
        (movie.length)?(
          
          <SearchResult movie={movie}/>


        ):(
          (selectedMovie.id)?(<MovieDetails/>):( <RowContainer/>)
         
        )
      }
        
        
      
    </div>
  );
}


const mapStateToProps=(state)=>{
  return{
    movie:state.movie.movie,
    selectedMovie:state.selctedMovie.selectedMovie
  }
}

export default connect(mapStateToProps)(App);
