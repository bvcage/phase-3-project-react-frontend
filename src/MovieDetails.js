import "./App.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieDetails ({ moviesArr, selectedMovie }) {

    const { id, image_url, imdb_id, plot, title, year } = moviesArr

    console.log(selectedMovie)

    return (
        <>
    <div>
        <Card style={{ width: '18rem', display: 'flex'}}>
      <Card.Img variant="top" src={selectedMovie.src} />
      <Card.Body>
        <Card.Title>{selectedMovie.title}</Card.Title>
        <Card.Text>
          {selectedMovie.plot}
        </Card.Text>
        <Button variant="primary">Check-Out</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
        <h2>{selectedMovie.title}</h2>
    </div>
    </>
    )
}

export default MovieDetails;