import React, { Component } from 'react';
import './JumboTron.css';
import {useHistory} from 'react-router-dom';

  const JumboTron = () => {
      const history = useHistory();
  
      const handleClick = () => {
          history.push("/Map");
      }

      const goToPets = () => {
        history.push("/Pets");
      }

      const goToHouse = () => {
        history.push("/House");
      }

      return(
  

      <div className="jumbotron jumbotron-fluid" >
        <div className="container">
          <h1 className="display-4">Hi Dylan</h1>
          <p className="lead">Welcome to Seattle</p>
          <p className="lead">Enjoy your stay, and don't be a fucker...</p>

          <button type="button" className="btn btn-primary" onClick={goToHouse}>The House</button>
          <button type="button" className="btn btn-primary" onClick={handleClick}>What should you do?</button>
          <button type="button" className="btn btn-primary" onClick={goToPets}>Mowgli, Kailia, and Hagrid</button>


          <hr className="my-4"/>
          <p></p>

        </div>
      </div>
    );
  }

export default JumboTron;

