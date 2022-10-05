import React from "react"
import { useNavigate } from "react-router-dom"

function Opener() {
    const navigate = useNavigate()
    const handleHomePageClick = () => {
        console.log("hello")
        navigate("/home")
    }
            
    return (
        <div onClick={handleHomePageClick} className="container-fluid">
            <h1 className="font">
                BLOCKBUST3R
            </h1>
        </div>
    );
}

export default Opener