import React, {useState} from 'react'
import axios from 'axios'

const CreateBook = () => {

    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookGenre, setBookGenre] = useState("")

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
        } else {
            console.log("Please fill out all values")
        }
    }

    return (
        <>
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
        </>
    )
}

export default CreateBook