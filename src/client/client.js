// Startup point for the client side application

// Allow babel to use new features, like async await
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

import Routes from './Routes'
import reducers from './reducers'



// Create a client-specific instance of axios... it will automatically add /api onto the beginning of the path the client is requesting
const axiosInstance = axios.create({
    baseURL: '/api'
})



// Get the initial state out of the global window variable - stored in the window as part of SSR in renderer.js
// Include the custom axios instance with thunk
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)))



// Targeting the 'root' div that we made in index.js... will "take over" control of the content
// It does NOT replace all of the content, React scans the content and sees what needs updated... i.e. event handlers, etc...
// This is called hydration - giving life to the content already there... so use .hydrate() instead of .render()
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
