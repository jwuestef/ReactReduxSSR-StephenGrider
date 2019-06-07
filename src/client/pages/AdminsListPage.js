import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAdmins } from '../actions'
// We can either do the auth guard here, or in Routes.js... but since we're using the spread operator in Routes.js, we can't really do it there... so wrap it here instead.
import requireAuth from '../components/hocs/requireAuth'



class AdminsListPage extends Component {

    componentDidMount() {
        this.props.fetchAdmins()
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return (
            <div>
               Protected list of admins:
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    return { admins: state.admins }
}



// Pull dispatch out of the store we receive
function loadData({ dispatch }) {
    return dispatch(fetchAdmins())
}



// Pass the AdminsListPage to the requireAuth HigherOrderComponent
export default {
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
    loadData: loadData
}


