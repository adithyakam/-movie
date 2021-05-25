import React from 'react'
import Card from '../Card/Card'

import "./SearchResult.css"

function SearchResult({movie}) {
    return (
        <div className='searchresult'>
                {
                    movie.map(ele=>{
                        return <Card
                        key={ele.id}
                         title={ele.title} 
                         rating={ele.vote_average}
                        poster={ele.poster_path}
                        />
                    })
                }
            
        </div>
    )
}

export default SearchResult
