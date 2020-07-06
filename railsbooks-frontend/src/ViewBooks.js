import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ViewBooks = () => {

    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)            // Page is loading by default
    const [errorMessage, setErrorMessage] = useState("")

    // This code to run upon mounting so uses useState hook
    useEffect(() => {
        axios.get(`http://localhost:3000/books/`)
            .then (res => {
                setBooks(res.data)
                setIsLoading(false)                             // No longer loading
                console.log(res.data)
            })
            .catch(e => {
                setErrorMessage("Error - please check URL")
                setIsLoading(false)                             // No longer loading
            })
    }, [])

    function renderBooks(){
        return (
        <>
            {books.map((book, index) => (
            <li key={`${book}-${index}`}>
                {index}. {book.title} by {book.author} - {book.genre}
            </li>
        ))}
        </>
        )}

    return (
      <div>
        {!isLoading ? renderBooks() : <h2>Loading...</h2> } 
      </div>
    );
}

export default ViewBooks