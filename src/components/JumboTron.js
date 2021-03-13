import React, { Component } from 'react';
import './JumboTron.css';

class JumboTron extends Component {

  render() {
      return(
  

      <div className="jumbotron jumbotron-fluid" >
        <div className="container">
          <h1 className="display-4">Hi Dylan</h1>
          <p className="lead">Welcome to Seattle</p>
          <button type="button" className="btn btn-primary" id ='dylanButton'>What should you do?</button>

          <hr className="my-4"/>
          <p></p>

        </div>
      </div>
    );
  }
}
export default JumboTron;

