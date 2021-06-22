import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/styles/normalize.css';
import './assets/styles/bootstrap-grid.min.css';
import './index.css';

export const ScrollProvider = React.createContext();
let viewport = document.querySelector("meta[name=viewport]");
let width = document.documentElement.clientWidth;
viewport.setAttribute('content', `width=${width > 1200 ? 1920 : 1200}`);
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);