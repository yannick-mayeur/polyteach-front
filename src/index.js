import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
//import promise from 'redux-promise';
import promisemiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import App from './containers/App';

// Import main sass file to apply global styles
import './static/sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(promisemiddleware, thunk)(createStore);

const app = (
   <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Router>
         <App />
      </Router>
   </Provider>
);

ReactDOM.render(app, document.getElementById('app'));