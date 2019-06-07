// House a function that will render our React app and return it as a string

import React from 'react'
// Choose the renderToString() from the server part of react-dom... returns a bunch of javascript and HTML
// Looking at the alternatives...
// renderToStaticMarkup() 
    // returns HTML that is not intended to be rehydrated
// renderToNodeStream()
    // returns a stream that outputs an HTML string... and the stream is the exactly the same as the result of renderToString()... but it's a stream instead of a string
    // which is great for when your page is really really long... responding with lots of tiny snippets of HTML
    // which can be really important for TTFB - Time To First Byte... for loading the page... Chrome Dev Tools -> Network tab -> pick request -> Timing tab
    // Request sent is how long it took to get our request from the browser to the server
    // TTFB is how long it took until we got data from the server  <-- Important for Google on ranking how responsive & quick loading your site is
    // and of course Content Download is how long it took to download our content
    // The big problem with this is that when you call the renderer function, you immediately start sending the response back to the user...
    // So before you've finished rendering the content, you're already sending the content back to the user
    // So if you come across, while rendering, a component.. like the requireAuth component... and the requireAuth needs to redirect you... then you can't do it! Because the response is already being streamed! You can't change the status code, it's too late!
    // ... so unless you're building a really big page, it's not worth the tradeoff of performance vs functionality
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
// Use this library to set meta tags for SEO, and FB./Twitter displaying page previews. There are a minimum 4 tags required, see docs... this tutorial will only bother with the first (the title)
// In fact, we can set any head tags with it! (It was made by the NFL, hence the name "helmet" for stuff related to the head tag)
import { Helmet } from 'react-helmet'


import Routes from '../client/Routes'



// BrowserRouter bases what component to show off the of the URL... But there is no URL bar on the server!
// Instead use StaticRouter - part of React specifically for SSR!
// Getting an error in the Chrome console about expecting div in div means there was a mismatch between what the server sent, vs what React thought should be there on hydration
// Context prop is required, started out with empty object, which allows the rendered content to talk with the StaticRouter after it's been rendered... Context object ends up as a prop in each page

// We need to communicate the current path the user is trying to access, so the StaticRouter knows which component to show... which is part of the original request object to Express... take as argument... and use the location prop
// The redux "createStore" is being passed in from index.js rather than building it here, because that will be complicated

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )

    // renderStatic returns an object of all the header tags we rendered up in the library
    const helmet = Helmet.renderStatic()

    // We need to hydrate the redux store too - pass the store to the global window object in a JS variable
    // COULD do this:
    // <script>
    //     window.INITIAL_STATE = ${JSON.stringify(store.getState())}
    // </script>
    // But that is dangerous! It's open to XXS attacks!
    // Instead, scrub the data in the store to make sure it doesn't get executed
    // So... use a library called serialize-javascript!

    // The script tag pulls in the bundle.js from the public directory - our 'actual' React app... instead of just that string of HTML
    // All the meta tags get pulled out with that one .toString() function call
    return `
        <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
        </html>
    `
}

 
