import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers';
import promise from './middleware/promise';
import lager from './middleware/lager';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise, lager)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
