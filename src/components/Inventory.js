import React from 'react';
import BookView from './BookView';
import {fbase} from '../fbase';

class Inventory extends React.Component {

    constructor() {
        super();
        this.state = { }
    }

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books',{
            context: this,
            state: 'books'
        });
   }

   componentWillUnmount() {
       fbase.removeBinding(this.ref);
   }

    render() {
        // const bookListing = this.state.books.map( book => {
        //    return <BookView book={book} addToOrder={this.props.addToOrder}/>
        // });

        let bookListing = <h4>No book on stock, sorry my friend!</h4>

        if(Array.isArray(this.state.books)) {
            bookListing = this.state.books.map( book => {
                return <BookView key={book.name} book={book} addToOrder={this.props.addToOrder}/>
            });
        }
        
        return (
            <div className="inventory col-6">
                <h2>Bookstore inventory:</h2>
                {bookListing}
            </div>
        );
    }
}

export default Inventory;