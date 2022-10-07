import React from "react";
// import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// import Cardz from "./Cardz";
import './Home.scss'

function Home () {
    return (
        <Container>
            <Container id="about">
                <p>Brickbuster . . .</p>
                <p>It's like Blockbuster, but without the funny smells! Fast customer service and our tapes are always rewound just for you!</p>
                <p>Our phase 3 project was to make a Many-to-Many relationship database and display it with a front-end website. We utilized Ruby Active Record Tables to create the database, and then used Instance Methods to pull the filter functions throughout!</p>
                <p>Here you can check out the list of available films and search by Genre or Title.</p>
                <p>You can also see the Due Dates of the movies you have rented! Checkout or Check-In all in one stop, no waiting in long lines!</p>
            </Container>
            <div className="wrapper">
                <Cardz img="data:image/jpeg;base64,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" title=<Link to="/checkout">Checkout</Link> description='Enjoy at home!' />
                <Cardz img="data:image/jpeg;base64,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" title={<Link to="/rentals">Rentals</Link>} description='Our selection of films!'/>
                <Cardz img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhUIBxIWFhIWFxgbGBgXGBcgGxoYGhsdGCMjGRUaHSgsHSAxHSEdIz0iMSkrLi4uGx8zODMtNygtMCsBCgoKDg0OGxAQGi0iHyYyNTYxMi0xKzIrNS03KystLS0rLS0tLS0tLSstLS0tLS0tNy0vLTUrLS0tLTUtLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHAwQBAgj/xABJEAACAQMCAwUEBAgKCwEAAAABAgADBBEFEgYhMQcTIkFRMmFxgRQjQpEVFnOSobHBwiUzQ1JkcoKio9EmNTZTVGJjk7KzwyT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAsEQEBAAIBAgQEBQUAAAAAAAAAAQIRAxIhBDFBsRNRYdEFIoGRwTJEcYLh/9oADAMBAAIRAxEAPwDcYiICIiAiIgIiICIiAiIgIiICInwnaMnpA+zjRuVr1npUjkoQGx0DEZxn1xg494lU464qawpUdH0Fg19eHZRIwRTU8mqt1GFHMeuPMAyyaNpqaRpiWNvkhBzY82ZicszHzZmJYnzJMD2xEQEREBERAREQEREBERAREQEREBERARE5VbhKVRadVgCxwoJAyfQZ6n3QOsTncV0tbdri5YKigszMQAqgZJJPQY85+1IZdy8wYH2IiAiIgJ5tSuadlp9S6viBSRGZyem0Ak5HnynpmSdtfGFGnZfi9bVRvL7q45ghEAcLzHPcxXpnkrCEZXU2jOzfhWjxVrV3r9VGt0VtlEWzNSNJmG4hTTIwVplAfIs78uk2xF2IF5nAxz6/Myp9lVtStOBqFO1qJUYgvVZGVvrah7xgSpxkbgvwAluhGMsnciIhYiIgIiICIiAiIgIiICIiAiIgIiICcrq2S8t2t7tFdGGGVgCrA+RU8iJ1iBk/F+iXyX72XDy1q9jS7qrWtq7EpUO4kU7eow3MvLcybiByAz7MuvB3GNvxXalrTKVk/jKL+2nPH9pc8s/I4OQLHM67SOFO6B4r0AtSu6Xibuwc1PLkoB+sxy5gq48LcsFSuVs7xosTPey7iVuILivU1iqwvTtzbnK00pp4fqkJOTvJDk+INhTgBc6FCZZe8IiIST+feMK/41dpH0Mc0e6pW4/JUWw/y3d8fhibbxHr1Lh7Tje3+7HPG2nUfmFLc9inaMA8zge+YH2c3Ybjm2uq1OvUNKnUqMtOk7MajjaSRjpuqE7umcSKx5e9xx+vt399P6LtrWnaIUtEVATkhVABPTJA88Ac/dO0RJbEREBERAREQEREBERAREQEREBERAREQEREBERAzXtI4Xe0uRxbw5lK9I76uwegx3gUe14fC6/aT3qMynC/HbcTmlQ0u3JqDH0skkU6HUeF8HvGbGVA8j4ist99ai9sntXZlDqVJRirAEYyrDoffMf1Owbst4sp3+kqfoVTIKAk+D2nQknxOvOohPMjevlkx5MsvyXq9PX7/f8Ads8TlaXKXtqt1asGpuoZWHQqRkEH4TrJaq32jvs4FuwDjdSZP+5in+9M/wCxSgKvFt9d/wAynTQfB3c/uD7pZ+17W7e04abTrivTWs727CmWAYoK6Ett67cK3P3GU/sV4gtLCvdJd1QKlatSWmArtu5EDmqnA3N1Mj1YZS3mn0l/htsREluREQEREBERAREQEREBERAREQEREBERAREQEREBIDjrT6Wo8LVqN5uAC7lZEZ3SovNWVFGWO7HLzBIPImT8QizfasV7LLy5uNUXh3Vq1S3p0WapToLyZnRgWp1KvUIreIUwPErnJwMTapkvatpdTR9do8TaTydmXPoK9MEqTjyemGpn+qo85pehaqmuaPS1S09iqgYA9RnqD7wcg+8SIz4754X09vT7foq3a9gcMoxAybigM458m3dflInsGH8B3Tf0n/5U5J9sf+zFMj/iaX7wkZ2C/wCoLof0o/8AqpSPVT+4/wBf5adERLOgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBEcWaMNf4erabkBnXwMfs1F8SN8nAMz7sX1w07utw7dArnNakp+yc7aqfJ8HHqzek1iYXxxng3tKXV6Awm9a/IcilTKVlHqc72+NRZF+bHk/LlM/0v+L/AN0vnbEv+hu8fZuLc/4qj9shuwap/Bl5S9LgH76SD9ksvadSF72e3L0uYWmtUEeYpstXl8llQ7CauLu/tx60X+/vF/dEeqL25p9ZfeNbiIktyIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICZn256aK2i0NSUeOnV7vHMllrDGFUe0d60+Xpul916vWttFq1tJTvK6oxppgHL45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" title={<Link to="/customers">Customers</Link>} description='Already A Member'/>
            </div>
        </Container>
    );
}

function Cardz( props ) {
    return(
        <div className="scss-card">
            <div className="card_body">
                <img src={props.img} alt="alt"/>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <button className="card_btn">{props.title}</button>
            </div>
        </div>
    )
}

export default Home