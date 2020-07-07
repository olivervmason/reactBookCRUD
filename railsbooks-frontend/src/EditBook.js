import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

const EditBook = (props) => {

    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [update, setUpdate] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${props.bookId}`)
            .then(res => {
                setBookTitle(res.data.title)
                setBookAuthor(res.data.author)
                setBookGenre(res.data.genre)
            })
            .catch(e => {
            
            }) 
    }, [])

    function editBook (){
        if(bookTitle && bookAuthor && bookGenre){
            axios.put(`http://localhost:3000/books/${props.bookId}`, {
                book: {
                    title: bookTitle,
                    author: bookAuthor,
                    genre: bookGenre
                }
            })
            .then (() => setUpdate(true))
        } else {
            setErrorMessage("^^ All fields are mandatory ^^")
        }
    }

    return (
        <>
            <Link to={`/books`}>Back to all books</Link>
            <div>
                <Link to={`/books/${props.bookId}`} > Back to view book </Link>
            </div>
            <div></div>
            <input 
                placeholder={bookTitle}
                value={bookTitle}
                onChange={e => setBookTitle(e.target.value)}
            />
            <div></div>
            <input 
                placeholder={bookAuthor}
                value={bookAuthor}
                onChange={e => setBookAuthor(e.target.value)}
            />
            <div></div>
            <input 
                placeholder={bookGenre}
                value={bookGenre}
                onChange={e => setBookGenre(e.target.value)}
            />
            <div></div>
            <button onClick={editBook}>Confirm changes</button>
            <div></div>
            {update && <Redirect to={`/books/${props.bookId}`} />}
            <h4>{errorMessage}</h4>
        </>
    )
}

export default EditBook