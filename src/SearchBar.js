import "./App.css"
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar ({ setSearchTerm }) {

    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const onClickGenre = (e) => {
        setSearchTerm(e.target.innerText)
    }

    const resetSearchTerm = () => {
        setSearchTerm('')
    }

    return (
        <div className='search-bar'>
        <InputGroup className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
          <DropdownButton
            variant="outline-secondary"
            title="Genre"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#" onClick={onClickGenre}>Action</Dropdown.Item>
            <Dropdown.Item href="#" onClick={onClickGenre}>Comedy</Dropdown.Item>
            <Dropdown.Item href="#" onClick={onClickGenre}>Horror</Dropdown.Item>
            <Dropdown.Item href="#" onClick={onClickGenre}>Romance</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-label="Search for a movie..." 
            style={{maxWidth: '1200px' }}
            onChange={onChangeHandler}
            onClick={resetSearchTerm}
            />
        </InputGroup>
      </div>
    )
}

export default SearchBar;