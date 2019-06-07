import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Header = ({ auth }) => {
    console.log('My auth status is:')
    console.log(auth)

    // Use an a tag to make a whole new request]
    // Not 100% sure why we have to do this... I think it has to do with the Google OAuth
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React SSR</Link>
                <ul className="right">
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/admins">Admins</Link></li>
                    <li><Link to="/blah">Blah</Link></li>
                    <li>{ authButton }</li>
                </ul>
            </div>
        </nav>
    )
}


function mapStateToProps({ auth }) {
    return { auth }
}


export default connect(mapStateToProps)(Header)

