import React from 'react'
import ViewBooks from './ViewBooks'
import ViewBook from './ViewBook'

function App() {
    return (
      <div>
        <ViewBooks />
        <ViewBook bookId="1"/>
      </div>
    );
}

export default App