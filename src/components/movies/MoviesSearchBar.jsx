import { useEffect, useState } from "react"
import { Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from "react-bootstrap"

function MoviesSearchBar ( props ) {
  const { setSearchTerm, setSortBy } = props
    const [genresArr, setGenresArr] = useState([])
    const [genreLabel, setGenreLabel] = useState('')
    const [sortLabel, setSortLabel] = useState('')

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

    const onClickSort = (e) => {
      setSortLabel(e.target.innerText)
      setSortBy(e.target.innerText)
    }

    const resetSearchTerm = () => {
      setSearchTerm('')
      setGenreLabel('')
    }

    const genres = genresArr.map((genre) =>{
      return (
        <Dropdown.Item key={genre} onClick={onClickGenre}>{genre}</Dropdown.Item>
      )
    })

    const sortOpts = ['a to z', 'z to a', 'year ↑', 'year ↓']
    const sorts = sortOpts.map((sort, i) => {
      return (
        <Dropdown.Item key={i} onClick={onClickSort}>{sort}</Dropdown.Item>
      )
    })


    return (
      <Container className='search-bar'>
        <Form>
          <Form.Group as={Row}>
            <Col>
              <InputGroup>
                <DropdownButton
                  variant="primary"
                  title={genreLabel ? genreLabel : "genre"}
                  id="input-group-dropdown-1"
                >
                  <Container style={{overflowY: 'scroll', maxHeight: '200px', backgroundColor: 'white'}}>
                    <Dropdown.Item href="#" onClick={resetSearchTerm}>All Movies</Dropdown.Item>
                    {genres}
                  </Container>
                </DropdownButton>
                <Form.Control aria-label="search for a movie..."
                  placeholder="search for a movie..."
                  style={{maxWidth: '1200px' }}
                  onChange={onChangeHandler}
                  onClick={resetSearchTerm}
                  />
              </InputGroup>
            </Col>
            <Col xs='auto' className='ps-0'>
                <DropdownButton
                  variant="primary"
                  title={sortLabel ? sortLabel : "sort"}
                  id="input-group-dropdown-1"
                >
                  <Container style={{overflowY: 'scroll', maxHeight: '200px', backgroundColor: 'white'}}>
                    {sorts}
                  </Container>
                </DropdownButton>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
}

export default MoviesSearchBar;