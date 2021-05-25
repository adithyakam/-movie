import React from 'react'
import Row from '../Row/Row'


import {LatestMovie,PopularMovie,TOPMovie,SearchMovie} from "../../tmdb.api"

function RowContainer() {
    return (
        <div>
            <Row  url={PopularMovie}/>
            <Row  url={TOPMovie}/>
            
        </div>
    )
}

export default RowContainer
