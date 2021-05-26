import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router'
import { API_KEY } from '../../tmdb.api'

import "./MovieDetails.css"

function MovieDetails(props) {

    const {selectedMovie} =props
    const  history=useHistory()
    const [cast, setcast] = useState([])


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/credits?api_key=${API_KEY}&language=en-US`)
        .then(res=>res.json())
        .then(res=>setcast(res.cast))
    },[])

    useEffect(() => {

        if(selectedMovie.title===undefined){
          history.push('/')
        }
      }, [])

   

    return (
        <div className="movieDetails">
            <div className="movieDetails__Conatiner">
                <img  src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt="movie poster"/>
                <div className="movieDetails__textContainer">
                    <h1>{selectedMovie.title}</h1>
                    <div className='movieDetails__textContainerDesc'><span>decription : </span><p>{selectedMovie.overview}</p></div>
                    <h6><span>Ratings : </span>{selectedMovie.vote_average}</h6>
                    <h6><span>Release Date : </span>{selectedMovie.release_date}</h6>
                </div>
            </div>
            <div className="movieDetails__actors">
                {
                        cast?.map(ele=>{
                           return(
                               <div className="movieDetails__actorsCard">
                                   <img src={`https://image.tmdb.org/t/p/w500/${ele.profile_path}`}/>
                                   <h1>{ele.name}</h1>
                               </div>
                           ) 
                        })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        selectedMovie:state.selctedMovie.selectedMovie
    }
}

export default withRouter(connect(mapStateToProps)(MovieDetails))
