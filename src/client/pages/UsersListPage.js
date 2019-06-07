import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchUsers } from '../actions'



class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    // Helmet expects ONE SINGLE STRING..... so this will not work: <title>{this.props.users.length} Users Loaded</title>
    // Just wrap the whole thing as an ES6 string
    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                Here's a big list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    return { users: state.users }
}






// SSR setup - this gets called from the server to get data asynchronously
// Each component gets a loadData() function so we can call it during SSR

// Have the store dispatch whatever action comes back from our action creator
// Return all that, so that the server can play with it

function loadData(store) {
    return store.dispatch(fetchUsers())   // the action creator returns a promise, which gets dispatched to the store
}

// export { loadData }   // named export


// export default connect(mapStateToProps, { fetchUsers })(UsersList)



export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData: loadData
}


