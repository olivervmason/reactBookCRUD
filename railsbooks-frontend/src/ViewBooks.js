import React, {useEffect} from 'react'
import axios from 'axios'

function ViewBooks() {

    // const [book, setBook] = useState([])

    // This code to run upon mounting so uses useState hook
    useEffect(() => {
        axios.get(`http://localhost:3000/books/`)
            .then(res => {
                console.log(res.data)
            })
    }, [])

    return (
      <div>
        All books component
      </div>
    );
}

export default ViewBooks