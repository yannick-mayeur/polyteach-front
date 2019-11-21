import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage'
import reducers from './store/reducers';
//import promise from 'redux-promise';
import promisemiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import App from './containers/App';

// Import main sass file to apply global styles
import './static/sass/style.scss';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


const createStoreWithMiddleware = applyMiddleware(promisemiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)

const app = (
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Router>
         <App />
      </Router>
      </PersistGate>
   </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
