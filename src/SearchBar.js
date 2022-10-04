import "./App.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function SearchBar () {
    return (
    <Container fluid>
        <Form className="d-flex" style={{maxWidth: '1500px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Container>
    )
}

export default SearchBar;