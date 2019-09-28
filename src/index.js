import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './App';
import Access from './pages/Access';
// import reset from './constants/css/reset';


import 'babel-polyfill';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';

// const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(

    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                {console.log(process.env.PUBLIC_URL)}
                {/* <App /> */}
                <Access />
            </Provider>
            {/* <GlobalStyle /> */}
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
