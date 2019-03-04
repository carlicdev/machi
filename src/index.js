import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
import { ProductProvider } from './context';

render((
    <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductProvider>
    ), document.getElementById('root'));
