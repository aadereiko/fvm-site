import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/styles/normalize.css';
import './assets/styles/bootstrap-grid.min.css';
import './index.css';

export const ScrollProvider = React.createContext();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);