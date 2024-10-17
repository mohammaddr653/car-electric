// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './css/fonts.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
document.documentElement.dir="rtl";

