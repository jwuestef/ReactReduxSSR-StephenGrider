import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import reducers from '../client/reducers'



export default (req) => {

    // Here on the server, axios should be directed towards the API server itself... instead of how the client is setup to point at this localhost server
    // We want to pass along the cookie, if it has one, along to the API server
    const axiosInstance = axios.create({
        baseURL: 'https://react-ssr-api.herokuapp.com/',
        headers: { cookie: req.get('cookie') || '' }
    })

    // Pass the custom axios instance along to thunk middleware, so that it passes along this custom axios to the action creators
    // The action creators no longer bring in their own instance of axios
    // Unless that action creator wanted to make a call to facebook or instagram... then it should still pull in it's own axios
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

    return store
}
