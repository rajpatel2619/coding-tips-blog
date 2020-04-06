import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png'





export default class Navbar extends React.Component{
  render(){
    return(

      
      <header className="bg-light-purple black-80 tc pv4 avenir">
 
            <h1 className="mt0 mb0 baskerville i fw1 f1 grow"><img src={logo} className="br-100 h4 w4 dib" title="Photo of a kitty staring at you" /></h1>
            <h2 className="mt2 mb3 fw7   tracked white hover-light-blue grow">&lt; Code With Me /&gt;</h2>

            <nav className="bt bb tc mw8 center mt2 b ">
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">Home</Link>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/yourtips">Your Tips</Link>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/register">Register</Link>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" to="/about">About</Link>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" to="/contact">Contact</Link>
            </nav>
      </header>

    
    )
  }
}
