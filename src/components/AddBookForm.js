import React from 'react';
import {fbase} from '../fbase';

class AddBookForm extends React.Component {

   constructor() {
      super();
      this.state = {
         books : [],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            }
      };
   }

   componentDidMount() {
      if (localStorage.getItem("loggedIn")) {
         this.setState({loggedIn:  localStorage.getItem("loggedIn")})
         console.log('test');
      }
      this.ref = fbase.syncState('bookstore/books',{
          context: this,
          state: 'books'
      });
   }

   handleChange = (event) => {

      let newBook;

      if(event.target.name==="onStock") {
          newBook = {
              ...this.state.book,
              [event.target.name]: event.target.checked
          };
      } else {
          newBook = {
              ...this.state.book,
              [event.target.name]: event.target.value
          };
      }

      this.setState({
          book: newBook
      });
  }

   componentWillUnmount() {
      fbase.removeBinding(this.ref);
   }

   addNewBook = (event) => {

      event.preventDefault();

      let newBook = { ...this.state.book };

      if (Array.isArray(this.state.books)) {
          this.setState({ 
              books: [...this.state.books, newBook],
              book : {
                  name: "",
                  author: "",
                  description: "",
                  onStock: true,
                  image: ""
              }
          });
        } else {
          this.setState({ 
              books: [newBook],
              book : {
                  name: "",
                  author: "",
                  description: "",
                  onStock: true,
                  image: ""
              }
          });
        }
  }

   render() {
      return (
         <div className="adminPanel col-6">
            <form onSubmit={this.addNewBook}>
                  <div className="form-group">
                     <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                        onChange={this.handleChange} value={this.state.book.name} />
                  </div>
                  <div className="form-group">
                     <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
                        onChange={this.handleChange} value={this.state.book.author} />
                  </div>
                  <div className="form-group">
                     <textarea placeholder="Book description" id="description" name="description" className="form-control"
                        onChange={this.handleChange} value={this.state.book.description} />
                  </div>
                  <div className="form-group">
                     <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                        onChange={this.handleChange} value={this.state.book.onStock} />
                     <label htmlFor="onStock" className="form-check-label">On stock</label>
                  </div>
                  <div className="form-group">
                     <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                        onChange={this.handleChange} value={this.state.book.image} />
                  </div>
                  <button type="submit" className="btn btn-primary form-group">Add</button>
            </form>
            <button type="submit" className="btn btn-error">Logout</button>
         </div>
      )
   }

}

export default AddBookForm;