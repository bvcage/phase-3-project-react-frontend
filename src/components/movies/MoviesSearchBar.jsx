import "../../App.css"
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function MoviesSearchBar ({ setSearchTerm }) {
    const [genresArr, setGenresArr] = useState([])
    const [genreLabel, setGenreLabel] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/movies/genres')
        .then ((res) => res.json())
        .then ((data) => setGenresArr(data.data))
    }, [])

    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const onClickGenre = (e) => {
        setSearchTerm(e.target.innerText)
        setGenreLabel(e.target.innerText)
    }

    const resetSearchTerm = () => {
        setSearchTerm('')
        setGenreLabel('')
    }

    const genres = genresArr.map((genre) =>{
      return (
        <Dropdown.Item key={genre} href="#" onClick={onClickGenre}>{genre}</Dropdown.Item>
      )
    })


    return (
      <Container className='search-bar'>
        <InputGroup style={{display: 'flex', justifyContent: 'center'}}>
          <DropdownButton
            variant="primary"
            title={genreLabel ? genreLabel : "Genre"}
            id="input-group-dropdown-1"
          >
            <Container style={{overflowY: 'scroll', maxHeight: '200px', backgroundColor: 'white'}}>
            <Dropdown.Item href="#" onClick={resetSearchTerm}>All Movies</Dropdown.Item>
            {genres}
            </Container>
          </DropdownButton>
          <Form.Control aria-label="Search for a movie..."
            placeholder="Search for a movie..."
            style={{maxWidth: '1200px' }}
            onChange={onChangeHandler}
            onClick={resetSearchTerm}
            />
        </InputGroup>
      </Container>
    )
}

export default MoviesSearchBar;