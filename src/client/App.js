import React from 'react'
import { renderRoutes } from 'react-router-config'

import Header from './components/Header'
import { fetchCurrentUser } from './actions'



// Because of the way we are setting up child routes in Routes.js... the App component will get a "route" property with a "routes" property
const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )
}



// Since this is integrated into the Routes file, it has the option to have a loadData function... vs the Header function that isn't listed in Routes...
// ... so even though it's the Header that wants the data, it's this file that has to get the data for it
// Since this loadData would be so small... just do it in line as an arrow function

export default {
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
    component: App
}
