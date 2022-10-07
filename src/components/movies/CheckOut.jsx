import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import MovieDetails from './MovieDetails'
import '../../App.css'


function CheckOut () {

    const [moviesArr, setMoviesArr] = useState([])
    const [selectedMovie, setSelectedMovie] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [filterMovieList, setFilterMovieList] = useState([])

   useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((res) => res.json())
    .then((data) => setMoviesArr(data.data))
   }, [])

   useEffect(() => {
        setFilterMovieList(moviesArr.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.includes(searchTerm)))
   }, [searchTerm])


   const handleClickMovie = (movie) => {
       setSelectedMovie(movie);
   }

    const movies = (searchTerm.length ? filterMovieList : moviesArr)?.map((movie) => {
        return (
            <MovieCard movie={movie} key={movie.id} onClickMovie={handleClickMovie}/>
        );
    });


    return (
        <>
        <Container style={{paddingTop: '10px'}}>
            <SearchBar setSearchTerm={setSearchTerm}/>
        </Container>
        <Container id="checkout-page" className="page-container">
            <br></br>
            {selectedMovie ? <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} /> :
            <Container className='card-container'>
                {movies}
            </Container>}
        </Container>
        </>
    )
};

export default CheckOut;