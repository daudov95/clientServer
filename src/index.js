import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App'
import { store } from './store/store'
// import {rootReducer} from './redux/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools())

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
