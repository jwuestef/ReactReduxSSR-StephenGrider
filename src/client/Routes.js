import React from 'react'
// import { Route } from 'react-router-dom'

import App from './App'
import HomePage from './pages/HomePage'
// import UsersListPage, { loadData } from './pages/UsersListPage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage';


// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     )
// }



// Using react-router-config package for SSR (official part of react-router)
// Include the loadData functions
export default [
    {
        ...App,   // Because we aren't tying a path to App, it will always be displayed on screen
        routes: [   // Child routes of App
            {
                ...HomePage, // component: HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
                // loadData: loadData,
                // component: UsersListPage
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage   // Using an empty path, react-router will know to display this if it can not find anything else to display
            }
        ]
    }
]


