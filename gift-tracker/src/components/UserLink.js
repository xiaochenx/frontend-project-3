import React from 'react'
import { Link } from 'react-router-dom'

 const UserLink = ({user}) => {
    return (
        <div>
            <Link to={`/users/${user.id}`}>
                <h3>{user.name}</h3>
            </Link>
        </div>
    )
}
export default UserLink