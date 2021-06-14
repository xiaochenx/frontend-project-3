import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    background: 'green'
}



 const Navigation = () => {
    return (
        <div>
            <NavLink
                to='/'
                exact
                style={link}
                activeStyle={{
                    background: 'red'
                }}
            >Home</NavLink>

            <NavLink
                to='/users'
                exact
                style={link}
                activeStyle={{
                    background: 'red'
                }}
            >Loved ones</NavLink>
        </div>
    )
}

export default Navigation