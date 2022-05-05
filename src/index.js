import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
// import {rootReducer} from './redux/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools())

const app = (
  // <Provider store={store}>
    <App />
  // {/* </Provider> */}
)

ReactDOM.render(
  app,
  document.getElementById('root')
);