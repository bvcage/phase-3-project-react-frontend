import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieCard from './MovieCard'
import MoviesSearchBar from './MoviesSearchBar'
import MovieDetails from './MovieDetails'
import '../../App.css'


function CheckOut () {

    const [moviesArr, setMoviesArr] = useState([])
    const [selectedMovie, setSelectedMovie] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [filterMovieList, setFilterMovieList] = useState([])
    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then((res) => res.json())
        .then((data) => setMoviesArr(data.data))
    }, [])

    // useEffect(() => {
    //     setFilterMovieList(moviesArr.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.includes(searchTerm)))
    // }, [searchTerm])


    const handleClickMovie = (movie) => {
        setSelectedMovie(movie);
    }

    // const movies = (searchTerm.length ? filterMovieList : moviesArr)?.map((movie) => {
    //     return (
    //         <MovieCard movie={movie} key={movie.id} onClickMovie={handleClickMovie}/>
    //     );
    // });


    // sort movies
    let movies = moviesArr
    switch (sortBy) {
        case 'a to z':
            movies = moviesArr.sort((a,b) => {
                const titleA = a.title.toUpperCase()
                const titleB = b.title.toUpperCase()
                if (titleA < titleB) { return -1 }
                if (titleA > titleB) { return 1 }
                return 0
            })
            break
        case 'z to a':
            movies = moviesArr.sort((a,b) => {
                const titleA = a.title.toUpperCase()
                const titleB = b.title.toUpperCase()
                if (titleA > titleB) { return -1 }
                if (titleA < titleB) { return 1 }
                return 0
            })
            break
        case 'year ↑':
            movies = moviesArr.sort((a,b) => {
                if (a.year > b.year) { return 1 }
                if (a.year < b.year) { return -1 }
                return 0
            })
            break
        case 'year ↓':
            movies = moviesArr.sort((a,b) => {
                if (a.year < b.year) { return 1 }
                if (a.year > b.year) { return -1 }
                return 0
            })
            break
        default:
            movies = moviesArr
            break
    }

    // filter movies
    movies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.includes(searchTerm))

    // create movie cards
    movies = movies.map(movie => {
        return (
            <MovieCard movie={movie} key={movie.id} onClickMovie={handleClickMovie}/>
        );
    })


    return (
        <Container className='page-container'>
            <MoviesSearchBar
                setSearchTerm={setSearchTerm}
                setSortBy={setSortBy}
            />
            {selectedMovie ?
                <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
            :
                <Container className='items-container'>
                    {movies}
                </Container>
            }
        </Container>
    )
};

export default CheckOut;