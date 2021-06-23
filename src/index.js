import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/styles/normalize.css';
import './assets/styles/bootstrap-grid.min.css';
import './index.css';

export const ScrollProvider = React.createContext();
let width = document.documentElement.clientWidth;
if(width > 768) {
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', `width=${width > 1200 ? 1920 : 1200} initial-scale=1`);

}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);