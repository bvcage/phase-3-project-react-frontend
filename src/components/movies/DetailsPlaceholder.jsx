import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "../../App.css"
import placeholder from "../../brickbuster.png"

function DetailsPlaceholder () {
    return (
        <Container>
            <Card style={{ width: '18rem', display: 'flex'}}>
                <Card.Img variant="top" src={placeholder} style={{width: '300px', height: '445px'}} />
            </Card>
            <div className='details-info'>
                <h2>Select a movie to display details...</h2>
            </div>
        </Container>
    )
}

export default DetailsPlaceholder;