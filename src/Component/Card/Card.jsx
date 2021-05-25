import React from 'react'


import "./Card.css"

function Card(props) {

const {title,rating,poster}=props;
// console.log(title,rating,poster);
    return (
        <div className="card">
            <img 
            className="card__img" 
            src={`${poster?`https://image.tmdb.org/t/p/w500/${poster}`:`https://www.freeiconspng.com/uploads/no-image-icon-23.jpg`}`} 
            alt="movie"/>
            <h1>{title}</h1>
        </div>
    )
}

export default Card
