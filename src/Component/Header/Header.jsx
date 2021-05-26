import React, { useState } from 'react'

import './Header.css'

import {API_KEY} from "../../tmdb.api"
import { connect } from 'react-redux'
import {addSearchedMovie} from '../../Redux/searchMovie/SearchMovie.action'
import { useHistory } from 'react-router'

function Header(props) {

    const  history=useHistory()
    const {addSearchedMovie} =props
    // console.log(addMovie);

    const [movie, setmovie] = useState("")

    const searchMovie=(event)=>{
        setmovie(event.target.value);
    }

    const submitForm=(event)=>{
        event.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            addSearchedMovie(res.results)
        })
        .catch(err=>alert(err))
        history.push('/search')
        setmovie("")
    }


    return (
        <div className="header">
            <h1>LOGO</h1>
            <form onSubmit={submitForm}>
                <input type="text" value={movie} onChange={searchMovie} placeholder="Enter Movie"/>
            </form>
        </div>
    )
}



const mapDispatchToProps=(dispatch)=>{
    return{
        addSearchedMovie:(movie)=>dispatch(addSearchedMovie(movie))
    }
}

export default connect(null,mapDispatchToProps)(Header)
