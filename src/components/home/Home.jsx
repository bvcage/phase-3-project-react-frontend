import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './Home.scss'
import checkout from "../../check-out.jpg"
import rentals from "../../current-rentals.jpg"
import customer from "../../new-customer.jpg"

function Home () {
    return (
        <Container>
            <Container id="about">
                <p>Brickbuster . . </p>
                <p>Its like Blockbuster but without the funny smells! Fast Customer service and our tapes are always rewound just for you!</p>
                <p>Our phase 3 project was to the take the Many to Many relationship and display it with a front end website. We utilized Ruby Active Record Tables to create the database and then used Instance Methods to pull the filter functions throught!</p>
                <p>Here you can check out the list of available films, search by Genre or Title.</p>
                <p>You can also see the Due Dates on the movies you have rented! Checkout or Checkin all in one stop, no waiting in long lines!</p>
            </Container>
            <div className="wrapper">
                <Cardz img={checkout} title={<Link to="/checkout">Checkout</Link>} description='Enjoy at home!' />
                <Cardz img={rentals} title={<Link to="/rentals">Rentals</Link>} description='View all rentals!'/>
                <Cardz img={customer} title={<Link to="/customers">Customers</Link>} description='Already a member?'/>
            </div>
        </Container>
    );
}

function Cardz( props ) {
    return(
        <div className="scss-card">
            <div className="card_body">
                <img style={{height: '250px', width: '260px'}} src={props.img} alt="alt"/>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
            </div>
        </div>
    )
}

export default Home