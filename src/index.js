import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import allReducers from '../src/reducers/allreducer';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const allStoreEnhancers = compose(applyMiddleware(thunk),
window.devToolsExtension && window.devToolsExtension()
);

// step 1st create store
const store= createStore(allReducers,
    {},
    allStoreEnhancers
)



ReactDOM.render(<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
