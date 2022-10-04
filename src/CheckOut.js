import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';
import './App.css'


function CheckOut () {

    const [moviesArr, setMoviesArr] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({})

   useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((res) => res.json())
    .then((data) => setMoviesArr(data.data))
   }, [])

    const movies = moviesArr?.map((movie) => {
    return (
        <MovieCard movie={movie} key={movie.id}/>
        );
    });

    const handleClickTest = (e) => {
        setSelectedMovie(e.target);
    }

    return (
    <div>
    <h1>BrickBuster</h1>
        <SearchBar />
        <br></br>
        <div className='card-container' onClick={handleClickTest}>
            {movies}
        </div>
        <div className='details'>
            <MovieDetails moviesArr={moviesArr} selectedMovie={selectedMovie} />
        </div>
        
    </div>
    )
};

export default CheckOut;