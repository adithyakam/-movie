import React from 'react'
import { connect } from 'react-redux';
import {setSelectedMovie} from '../../Redux/selectedMovieReducer/selectedMovie.action'

import "./Card.css"

function Card(props) {

    
const {title,rating,poster,ele,setSelectedMovie}=props;

    const handleClick=()=>{
        setSelectedMovie(ele)
    }

// console.log(title,rating,poster);
    return (
        <div className="card" onClick={handleClick}>
            <img 
            className="card__img" 
            src={`${poster?`https://image.tmdb.org/t/p/w500/${poster}`:`https://www.freeiconspng.com/uploads/no-image-icon-23.jpg`}`} 
            alt="movie"/>
            <h1>{title}</h1>
        </div>
    )
}


const mapDispatchToProps=dispatch=>{
    return{
        setSelectedMovie:movie=>dispatch(setSelectedMovie(movie))
    }
}

export default connect(null,mapDispatchToProps)(Card)
