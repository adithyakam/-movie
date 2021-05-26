import logo from './logo.svg';
import './App.css';
import RowContainer from './Component/RowContainer/RowContainer';
import SearchResult from './Component/SearchResult/SearchResult'


import Header from './Component/Header/Header';
import { connect } from 'react-redux';
import MovieDetails from './Component/MovieDetails/MovieDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  const {movie,selectedMovie}=props

  // console.log(selectedMovie);
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path="/"> <RowContainer/></Route>
        <Route exact path="/moviedetails"><MovieDetails/></Route>
        <Route exact path="/search"><SearchResult/></Route>
        
      </Switch>
      {/* {
        (movie.length)?(
          
          <SearchResult movie={movie}/>


        ):(
          (selectedMovie.id)?(<MovieDetails/>):( <RowContainer/>)
         
        )
      }
         */}
    </div>
    </Router>
  );
}


const mapStateToProps=(state)=>{
  return{
    movie:state.movie.movie,
    selectedMovie:state.selctedMovie.selectedMovie
  }
}

export default connect(mapStateToProps)(App);
