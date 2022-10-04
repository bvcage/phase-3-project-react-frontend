import "./App.css"
import Card from 'react-bootstrap/Card';
import { useState } from "react";


function MovieCard ({ movie, onClickMovie }) {
    const { id, image_url, title, plot, year } = movie
   

    const handleClick = () => {
        onClickMovie(movie)
    }

    return (
        <Card className="bg-dark text-white" value={movie.id} style={{display: "inline-grid", maxWidth: '200px'}} onClick={handleClick}>
      <Card.Img src={image_url} />
    </Card>
  );
}

export default MovieCard;