// CommonJS module system - default nodejs stuff
// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString

// const Home = require('./client/components/Home').default

// But because we are running index.js through webpack... we can use ES6 syntax - good because same code syntax as on client

// Allow babel to use new features, like async await
import 'babel-polyfill'

import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'   // Because we HAVE to use cookie auth for SSR, use a proxy to pass requests off to the api server

import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import Routes from './client/Routes'



const app = express()

// Anything we get intended for the API... forward it along to the API
app.use('/api', proxy('http://react-ssr-api.herokuapp.com/', {
    proxyReqOptDecorator(opts) {   // The api server he built uses Google OAuth... and we need to do some config to make sure that our proxy doesn't break the OAuth flow
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts
    }
}))   // Any requests that are sent to /api will be automatically passed off to the api server
app.use(express.static('public'))   // tells express to use the public directory as a static directory available to the public



app.get('*', (req, res) => {
    // Pass in the original request, because this request object includes all the cookies sent!
    const store = createStore(req)
    
    // Figure out which components should be rendered... so we know which components we expect to need to load data async for...
    // then loop over the results and, if it exists, call the loadData method. Pass in the server side redux store, so they can dispatch and interact with it
    // const promises = matchRoutes(Routes, req.path)   // return array of components
    //     .map( ({ route }) => {
    //         return route.loadData ? route.loadData(store) : null;
    //     });  // Return an array of promises, since we're calling loadData(), which returns async promises

    // ERROR HANDLING SOLUTION #3 - wrap each promise with a wrapper promise
    const promises = matchRoutes(Routes, req.path)   // return array of components
        .map( ({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })  // Return an array of promises, since we're calling loadData(), which returns async promises
        .map(promise => {
            // Make sure it's not null
            if (promise) {
                return new Promise( (resolve, reject) => {
                    // When the inner promise gets resolved or rejected...
                    promise.then(resolve).catch(resolve)
                })
            }
        })



    // Wait for all the loadData() calls to finish their async calls
    Promise.all(promises).then( () => {

        const context = {}; // Define a context, see notes in renderer.js for more details.
        // Pass the initialized store to the renderer
        const content = renderer(req, store, context);

        // console.log('context is:')
        // console.log(context)
        // If the URL property is set on the context, that means it is trying to be redirected by React
        if (context.url) {
            // console.log('Redirecting')
            // WARNING - Chrome caches redirect commands... when developing, dev tools -> network tab -> disable cache... in order for this to actually be executed, otherwise Chrome will redirect to "/" on it's own, and the /admins route will never even be hit on our server!
            return res.redirect(302, context.url)   
        }
        // This property gets set on the context, on that notFound page
        if (context.notFound) {
            // console.log('Page not found')
            res.status(404);
        }

        res.send(content)
    })
    // ERROR HANDLING SOLUTION #1
    // If you try to access /admins fresh, and you aren't authorized... or for ANY reason the Promise.all() doesn't successfully complete...
    // NOT RECOMMENDED - abandon the whole server side rendering process and just send a message... don't even try to render the app
    // .catch( () => {
    //     res.send('Something went wrong')
    // })
    // ERROR HANDLING SOLUTION #2
    // Also not recommended
    // Pull out the code inside .then() into a function...
    // ... and then not only call that function from the .then() function, but do the same thing from the .catch() statement
    // So we always render our app - whether there was any error or not
    // The problem with this approach is that if any request fails, it INSTANTLY goes to the .catch() function... even if all of the others would be successful
    // ... so we'd render our app with missing data from the other requests
    // ERROR HANDLING SOLUTION #3 - best option we have
    // Wrap each promise with another outer promise...
    // Whenever the inner promise succeeds/fails, we manually resolve the outer wrapper promise as success


})



app.listen(3000, () => {
    console.log('Listening on port 3000')
})
