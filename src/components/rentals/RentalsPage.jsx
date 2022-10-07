import "../../App.css"
import React, { useEffect, useState } from "react"
import RentalsContainer from "./RentalsContainer"
import ReviewsForm from "../reviews/ReviewsForm"
import { Button, Modal } from "react-bootstrap"

function RentalsPage () {

    const [rentalsArr, setRentalsArr] = useState([])
    const [selectedRental, setSelectedRental] = useState()
    const [showPrompt, setShowPrompt] = useState(false)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/rentals/out")
            .then(r => r.json())
            .then(api => setRentalsArr(api.data))
    }, [])

    function handleCheckIn (id) {
        // get & set rental info
        const rental = rentalsArr.find(rental => rental.rental.id === id)
        setSelectedRental(rental)
        // prompt user for review
        setShowPrompt(true)
        // checkin rental
        const checkInDate = new Date()
        checkInDate.setTime(Date.now())
        fetch(`http://localhost:9292/rentals/${id}/edit`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({"checkin_date": checkInDate})
        }).then(r => r.json()).then(data => {
            const checkin = data.data
            const newRentalsArr = rentalsArr.filter(rental => rental.rental.id !== checkin.id)
            setRentalsArr(newRentalsArr)
        })
    }

    function handleExtend (rental) {
        const oldDueDate = rental.due_date
        const newDueDate = new Date()
        newDueDate.setTime(oldDueDate.getTime() + 2 * (24 * 60 * 60 * 1000) )

        fetch(`http://localhost:9292/rentals/${rental.id}/edit`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ due_date: newDueDate })
        }).then(r=>r.json()).then(api=>{
            const extended = api.data
            const updatedArr = rentalsArr.map(rental => {
                if (rental.rental.id === extended.id) { return {...rental, rental: extended} }
                return rental
            })
            setRentalsArr(updatedArr)
        })
    }

    function hideForm () {
        setShowForm(false)
    }

    function hidePrompt () {
        setShowPrompt(false)
    }

    function onClickYes () {
        hidePrompt()
        setShowForm(true)
    }

    const reviewPromptModal = !!selectedRental ? (
        <Modal show={showPrompt} onHide={hidePrompt}>
            <Modal.Header>Customer Review</Modal.Header>
            <Modal.Header>Does {selectedRental.customer.first_name} want to review {selectedRental.movie.title}?</Modal.Header>
            <Modal.Footer>
                <Button
                    variant='success'
                    style={{width: '100px'}}
                    onClick={onClickYes}>
                        Yes
                </Button>
                <Button
                    variant='danger'
                    style={{width: '100px'}}
                    onClick={hidePrompt}>
                        No
                </Button>
            </Modal.Footer>
        </Modal>
    ) : null

    return (<>
        { showForm ?
            <ReviewsForm rental={selectedRental} onComplete={hideForm} />
            :
            <RentalsContainer rentalsArr={rentalsArr} onClickCheckIn={handleCheckIn} onClickExtend={handleExtend} />
        }
        {reviewPromptModal}
    </>)
}

export default RentalsPage;