import React from "react"
import "./Opener.css"
import { Link } from "react-router-dom";

function Opener() {

    function handleHomePageClick() {

    }

    return (
    <div onClick={handleHomePageClick} class="container-fluid">
        <p className="font">
            BLOCKBUST3R
        </p>
        <button className='Home'>
            <Link to="/home">Home</Link>
        </button>
    </div>
    );
}

export default Opener