import "./App.css"
import Card from 'react-bootstrap/Card';
import { useState } from "react";


function MovieCard ({ movie, onClickMovie }) {
    const { image_url } = movie
   

    const handleClick = () => {
        onClickMovie(movie)
    }

    return (
        <Card className='my-auto' value={movie.id} style={{display: "inline-grid", maxWidth: '200px', backgroundColor: 'rgba(0,0,0,0)'}} onClick={handleClick}>
      <Card.Img src={image_url} />
    </Card>
  );
}

export default MovieCard;