import React from 'react'
import ViewBooks from './ViewBooks'
import ViewBook from './ViewBook'
import {BrowserRouter, Route} from 'react-router-dom'
import CreateBook from './CreateBook';

function App() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ViewBooks} />  
          <Route exact path="/books" component={ViewBooks} />  
          <Route exact path="/books/:id" render={props => <ViewBook bookId={props.match.params.id}/> } /> 
          <Route exact path="/book/new" component={CreateBook} />
        </BrowserRouter>
      </div>
    );
}

export default App