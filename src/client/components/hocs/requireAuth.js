// Higher order components are always functions...
// convention is for file name to be lowercase

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



export default (ChildComponent) => {

    class RequireAuth extends Component {
        render() {
            switch(this.props.auth) {
                case false:
                    // Redirect them to the home page
                    return <Redirect to="/" />
                case null:
                    // We haven't gotten an answer yet
                    return <div>Loading...</div>
                default:
                    // Assume we successfully received authentication, show the child component
                    return <ChildComponent {...this.props} />
            }
        }
    }

    function mapStateToProps({ auth }) {
        return { auth }
    }

    return connect(mapStateToProps)(RequireAuth)
}
