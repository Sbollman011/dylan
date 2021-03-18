import React, { Component } from 'react';
import NavBar from './NavBar';
import './Pets.css'

class Pets extends Component {

  render() {
      return(
            <div className= 'container-fluid' >
                <NavBar className ="petsNav"></NavBar>,
                 <h1>Mowgli, Kaila, and Hagrid</h1>  
                     <p> so do this stuff, ya  ya ya?</p>

             </div>
        );
    }
}

export default Pets;