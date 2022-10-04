import "./App.css"
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar () {
    return (
        <div className='search-bar'>
        <InputGroup className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
          <DropdownButton
            variant="outline-secondary"
            title="Genre"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Romance</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-label="Text input with dropdown button" style={{maxWidth: '1200px' }}/>
        </InputGroup>
      </div>
    )
}

export default SearchBar;