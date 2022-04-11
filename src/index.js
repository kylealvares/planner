import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <App tab="home" />
    </HashRouter>
);