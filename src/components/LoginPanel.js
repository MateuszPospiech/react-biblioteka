import React from 'react';
import {firebaseApp} from '../fbase';

class LoginPanel extends React.Component {

   constructor() {
      super();
      this.state = {
         email: "",
         password: "",
      }
   }

   authenticate = (event) => {
      event.preventDefault();
      firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then( () => {
              this.this.props.changeLoggedIn(true);
          })
          .catch( () => {
              console.log('Unable to authenticate');
          })
   }
  
   handleLoginChange = (event) => { 
      
      this.setState({
         [event.target.name]: event.target.value
      })
      
   }

   render() {
      return (
         <form className="log-in-form" onSubmit={this.authenticate}>
            <div className="form-group">
            <input type="text" placeholder="email" id="email_bs" name="email" className="form-control" 
                  onChange={this.handleLoginChange} value={this.state.email}/>
            </div>
            <div className="form-group">
            <input type="password"  id="password_bs" name="password" className="form-control" 
                  onChange={this.handleLoginChange} value={this.state.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
         </form>
      )
   }

}

export default LoginPanel;