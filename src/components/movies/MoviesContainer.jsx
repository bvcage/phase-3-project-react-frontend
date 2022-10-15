import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieCard from './MovieCard'
import MoviesSearchBar from './MoviesSearchBar'
import MovieDetails from './MovieDetails'

function MoviesContainer (props) {
   const { moviesArr } = props
   const [selectedMovie, setSelectedMovie] = useState()
   const [searchTerm, setSearchTerm] = useState('')
   const [sortBy, setSortBy] = useState('')

   const handleClickMovie = (movie) => {
      setSelectedMovie(movie);
   }

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
   movies = !!moviesArr ? movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.includes(searchTerm)) : null

   // create movie cards
   movies = !!moviesArr ? movies.map(movie => {
       return (
           <MovieCard movie={movie} key={movie.id} onClickMovie={handleClickMovie}/>
       );
   }) : null

   return (
      <Container>
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
}

export default MoviesContainer