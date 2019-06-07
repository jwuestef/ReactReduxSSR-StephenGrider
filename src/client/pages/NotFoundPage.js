import React from 'react'



// context gets passed as prop named staticContext
// Only the static router implments staticContext... on the BrowserRouter this will be empty!
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;   // We will be able to look at this on the server, since this is the server-rendered context on the server side
    return <h1>Opps, route not found.</h1>
}



export default {
    component: NotFoundPage
}

