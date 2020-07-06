import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ViewBooks = () => {

    const [books, setBooks] = useState([])

    // This code to run upon mounting so uses useState hook
    useEffect(() => {
        axios.get(`http://localhost:3000/books/`)
            .then (res => {
                setBooks(res.data)
                console.log(res.data)
            })
    }, [])

    return (
      <div>
        All books component

        {books.map((book, index) => (
            <li key={`${book}-${index}`}>
                {index}. {book.title} by {book.author} - {book.genre}
            </li>
        ))}

      </div>
    );
}

export default ViewBooks