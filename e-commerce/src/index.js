import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    // BrowserRouter will give all the functionality of routing
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

