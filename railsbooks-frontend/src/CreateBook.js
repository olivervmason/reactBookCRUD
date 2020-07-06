import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

const CreateBook = () => {

    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    function createBook(){
        // console.log("CreateBook method activated")
        
        if(bookTitle && bookAuthor && bookGenre){
            axios.post(`http://localhost:3000/books`, {
                book: {
                    title: bookTitle,
                    author: bookAuthor,
                    genre: bookGenre
                }
            })
            .then (() => setIsCreated(true))
        } else {
            setErrorMessage("^^ All fields are mandatory ^^")
        }
    }

    return (
        <>
            <Link to={`/books`}>Back to all books</Link>
            <div></div>
            <input 
                placeholder="Book Title"
                value={bookTitle}
                onChange={e => setBookTitle(e.target.value)}
            />
            <div></div>
            <input 
                placeholder="Author name"
                value={bookAuthor}
                onChange={e => setBookAuthor(e.target.value)}
            />
            <div></div>
            <input 
                placeholder="Book Genre"
                value={bookGenre}
                onChange={e => setBookGenre(e.target.value)}
            />
            <div></div>
            <button onClick={createBook}>Create new book</button>
            <div></div>
            {isCreated && <Redirect to="/books" />}
            <h4>{errorMessage}</h4>
        </>
    )
}

export default CreateBook