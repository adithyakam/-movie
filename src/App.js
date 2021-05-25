import logo from './logo.svg';
import './App.css';
import RowContainer from './Component/RowContainer/RowContainer';
import SearchResult from './Component/SearchResult/SearchResult'


import Header from './Component/Header/Header';
import { connect } from 'react-redux';

function App(props) {

  const {movie}=props

  return (
    <div className="App">
      <Header/>
      {
        (movie.length)?(
          <SearchResult movie={movie}/>
        ):(
          <RowContainer/>
        )
      }
        
        
      
    </div>
  );
}


const mapStateToProps=(state)=>{
  return{
    movie:state.movie.movie
  }
}

export default connect(mapStateToProps)(App);
