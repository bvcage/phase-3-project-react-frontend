import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';
import './App.css'
import NavBar from './components/NavBar';


function CheckOut () {

    const [moviesArr, setMoviesArr] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [filterMovieList, setFilterMovieList] = useState([])

   useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((res) => res.json())
    .then((data) => setMoviesArr(data.data))
   }, [])

   useEffect(() => {
        setFilterMovieList(moviesArr.filter((movie) => movie.title.includes(searchTerm) || movie.genre.includes(searchTerm)))
   }, [searchTerm])


   const handleClickMovie = (movie) => {
       setSelectedMovie(movie);
   }

    const movies = (filterMovieList.length ? filterMovieList : moviesArr)?.map((movie) => {
    return (
        <MovieCard movie={movie} key={movie.id} onClickMovie={handleClickMovie}/>
        );
    });


    return (
        <div>
            <NavBar />
            <br></br>
            <SearchBar setSearchTerm={setSearchTerm} />
            <br></br>
            <div className='card-container'>
                {movies}
            </div>
            <div className='details'>
                <MovieDetails selectedMovie={selectedMovie} />
            </div>
            
        </div>
    )
};

export default CheckOut;