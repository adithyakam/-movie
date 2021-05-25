import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'


import './Row.css'

function Row(props) {

    const {url}=props


    const [rowMovies, setRowMovies] = useState([])

    useEffect(() => {
    
        fetch(url)
        .then(res=>res.json())
        .then(res=>setRowMovies([...res.results]))


    },[])


    // console.log(rowMovies);

    return (
        <div className="row">

            {
                (rowMovies.length > 0)?(

                        rowMovies.map(ele=>{
                            return<Card 
                                        key={ele.id}
                                        title={ele.title} 
                                        rating={ele.vote_average}
                                        poster={ele.poster_path}
                                        ele={ele}
                            />
                            //  return<h1>{ele.title}</h1>
                        })

                   
                ):(
                    <h3>loading...</h3>
                )
                
            }
        </div>
    )
}

export default Row
