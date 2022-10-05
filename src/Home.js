import React from "react";

function Home({ onClickCheckout }) {
    return (
        <>
            <div className="buttons">
                <button>Check In</button>
                <button onClick={onClickCheckout}>Check Out</button>
                <button>Current Rentals</button>
                <button>New Customer</button>
            </div>
        </>
    );
}

export default Home