import React from "react"

function Opener() {
    const handleHomePageClick = ()=> {
            console.log("hello")}
            
    return (
    <div onClick={handleHomePageClick} className="container-fluid">
        <h1 className="font">
            BLOCKBUST3R
        </h1>

    </div>
    );
}

export default Opener

  // const navigate = useNavigate

    // const handleHomePageClick = ()=> {
    //     console.log("hello")
        
    //     // navigate('/home')

    //     return (
           
    //     )
    // }