import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ViewBook = (props) => {

    const [book, setBook] = useState([])
    const [isLoading, setIsLoading] = useState(true)            // Page is loading by default
    const [errorMessage, setErrorMessage] = useState("")        

    // This code to run upon mounting so uses useState hook
    useEffect(() => {
        axios.get(`http://localhost:3000/books/${props.bookId}`)
            .then (res => {
                setBook(res.data)
                setIsLoading(false)                             // No longer loading
                console.log(res.data)                   
            })
            .catch(e => {
                setErrorMessage("Error - please check URL")
                setIsLoading(false)                             // No longer loading
            })
    }, [])

    function renderBook(){
        return (
        <>
            <li key={`${book}`}>
                {book.title} by {book.author} - {book.genre}
            </li>
        </>
        )}

    return (
      <div>
        {!isLoading ? renderBook() : <h2>Loading...</h2> } 
        {errorMessage && <h3>{errorMessage}</h3>}
      </div>
    );
}

export default ViewBook