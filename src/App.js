import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import 'tachyons';
import Home from './components/home';
import Yourtips from './components/yourtips';
import Register from './components/register';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <BrowserRouter>

        <Navbar />
      <div className="bg-light-green pv4">
        <Switch  >
          <Route path='/' exact component={Home} />
          <Route path='/yourtips' exact component={Yourtips} />
          <Route path='/register' exact component={Register} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
         
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
