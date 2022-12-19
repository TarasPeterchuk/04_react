import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
