import React from 'react'
import Row from '../Row/Row'

import './RowContainer.css'


import {LatestMovie,PopularMovie,TOPMovie,SearchMovie} from "../../tmdb.api"

function RowContainer() {
    return (
        <div className="rowContainer">
            <h7>Popular Movie</h7>
            <Row  url={PopularMovie}/>
            <h7>Top Movie</h7>
            <Row  url={TOPMovie}/>
            
        </div>
    )
}

export default RowContainer
