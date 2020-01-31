import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="root">
    {/* 
      Switch will only route on whatever path we are putting in our component. Nothing else! 
      It will match first the path from the top and then below. It will not match up and down! 
      Switch is useful, because it gives us more control of our code, because we don't accidently
      Render multiple components
    */}
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/hats' component={HatsPage} /> 
      </Switch>



    </div>
  );
}

export default App;
