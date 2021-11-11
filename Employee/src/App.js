import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactListComponent from './components/ContactListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewProductComponent from './components/ViewContactComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
            
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {ContactListComponent}></Route>
                <Route path = "/contacts" component = {ContactListComponent}></Route>
                <Route path = "/view-contact/:id" component = {ViewProductComponent}></Route>
              </Switch>
            </div>
        
        <FooterComponent />
    </Router>
    </div>
  );
}

export default App;
