import "./App.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieDetails ({ selectedMovie }) {

    const { id, image_url, imdb_id, plot, title, year } = selectedMovie

    return (
        <>
    <div>
        <Card style={{ width: '18rem', display: 'flex'}}>
      <Card.Img variant="top" src={image_url} />
    </Card>
    </div>
    <div className='details-info'>
        <h2>{title}</h2>
        <h5>{year}</h5>
        <p>{plot}</p>
        <Button variant='primary'>Check-Out</Button>
    </div>
    </>
    )
}

export default MovieDetails;