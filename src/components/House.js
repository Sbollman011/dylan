import React, { Component } from 'react';
import NavBar from './NavBar';

class House extends Component {

  render() {
      return(
            <div className= 'container-fluid' >
                <NavBar className ="petsNav"></NavBar>,
                 <h1>The house</h1>  
                     <p> so do this stuff, ya  ya ya?</p>

             </div>
        );
    }
}

export default House;