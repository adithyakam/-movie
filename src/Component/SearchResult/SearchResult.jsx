import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import Card from '../Card/Card'

import "./SearchResult.css"

function SearchResult({movies}) {

    const history=useHistory()

    // useEffect(() => {
    //   if(movies.length==0){
    //     history.push('/')
    //   }
    // }, [])



    return (
        <div className='searchresult'>
                {
                    (movies.length==0)?(
                        <h1>no movies  </h1>
                    ):(<></>)
                }

                {
                    movies?.map(ele=>{
                        return <Card
                        key={ele.id}
                         title={ele.title} 
                         rating={ele.vote_average}
                        poster={ele.poster_path}
                        ele={ele}
                        />
                    })
                }
            
        </div>
    )
}




const mapStateToProps=(state)=>{
    return{
      movies:state.movies.movies
    }
  }

export default connect(mapStateToProps)(SearchResult)
