import React from 'react';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';

import '../App.css';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn : false
        };
    };

    changeLoggedIn = (newValue) => this.setState({loggedIn: newValue})
    
    componentDidMount() {
        if (localStorage.getItem("loggedIn")) {
           this.setState({loggedIn:  localStorage.getItem("loggedIn")})
           console.log('test');
        }
     }

    render() {

        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn} />
                    
                }
                {this.state.loggedIn && 
                    <AddBookForm />
                }
                </div>
            </div>
        )}
}

export default AdminPanel;