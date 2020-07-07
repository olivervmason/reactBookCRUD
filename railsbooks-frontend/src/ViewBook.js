import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteBook from './DeleteBook'

const ViewBook = (props) => {

    const [book, setBook] = useState([])
    const [isLoading, setIsLoading] = useState(true)            // Page is loading by default
    const [errorMessage, setErrorMessage] = useState("")        
    const [updated, setUpdated] = useState(false)

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
            <div>
               <Link to="/">Back to all books</Link>
            </div>    
            <div key={`${book}`}>
                {book.title} by {book.author} - {book.genre}&nbsp;
            </div>
            <div>
                <Link to={`/books/${props.bookId}/edit`} > Edit book </Link>
            </div>
            <DeleteBook 
                bookId={book.id}
                onDelete={() => setUpdated(true)}                       // Called automatically if not in arrow function.
            />
        </>
        )}

    return (
      <div>
        {!isLoading ? renderBook() : <h2>Loading...</h2> } 
        {errorMessage && <h3>{errorMessage}</h3>}
        {updated && <Redirect to="/books" />}
      </div>
    );
}

export default ViewBook