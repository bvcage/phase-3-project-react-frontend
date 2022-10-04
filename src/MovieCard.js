import "./App.css"
import Card from 'react-bootstrap/Card';
import { useState } from "react";


function MovieCard ({ movie }) {
    const { id, image_url, title, plot, year } = movie
    // const [selectedMovie, setSelectedMovie] = useState({})

    // const handleClickTest = (e) => {
    //     setSelectedMovie(e.target);
    //     console.log(selectedMovie)
    // }

    return (
        <Card className="bg-dark text-white" style={{display: "inline-grid", maxWidth: '200px'}}>
      <Card.Img src={image_url} title={title} id={id} plot={plot} year={year}/>
    </Card>
  );
}

export default MovieCard;