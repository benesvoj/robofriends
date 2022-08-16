import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import 'tachyons';
import App from './containers/App';
import {searchRobots} from "./reducers";

const store = configureStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

