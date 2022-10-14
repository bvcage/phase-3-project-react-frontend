import React from "react"
import { Container } from "react-bootstrap"

function Home () {
    const handleHomePageClick = () => {
        console.log("hello")
    }
            
    return (
    <div onClick={handleHomePageClick} class="container-fluid">
        <p className="font">
            BLOCKBUST3R
        </p>
        <button className='Home'>
            {/* <Link to="/home">Home</Link> */}
        </button>
    </div>
    );
}

export default Home