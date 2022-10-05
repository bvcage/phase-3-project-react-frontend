import "./App.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieDetails ({ selectedMovie }) {

    const { id, image_url, imdb_id, plot, title, year } = selectedMovie

    console.log(selectedMovie)

    const checkOutMovie = () => {
        fetch('http://localhost:9292/rentals', {
            method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "checkout_date": null,
             "due_date": null,
             "price": 15,
             "movie_id": selectedMovie.id,
             "customer_id": 2
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


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
        <Button variant='primary' onClick={checkOutMovie}>Check-Out</Button>
    </div>
    </>
    )
}

export default MovieDetails;