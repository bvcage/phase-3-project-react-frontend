import React from "react";

function Home() {
    return (
        <>
            <div className="btn-outline">
                <button type="button" class="btn btn-outline-secondary">Check-In</button>
                <button type="button" class="btn btn-outline-secondary">Check-Out</button>
                <button type="button" class="btn btn-outline-secondary">Rentals</button>
                <button type="button" class="btn btn-outline-secondary">New Customer</button>
            </div>
        </>
    );
}

export default Home