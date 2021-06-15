import React,{useState, useEffect} from 'react'
import UserLink from '../components/UserLink'
import UserForm from './UserForm'


const Users = () => {

    const [allUsers, setAllUsers] = useState([])
    const [displayForm, setDisplayForm] = useState(false)
     
    useEffect(() => {
        fetch('http://localhost:9393/users')
        .then(response => response.json())
        .then(data => {
           console.log(data)
         setAllUsers(data)
        })
    }, [])

    const toggleDisplayForm = (e) => {
        setDisplayForm(true)
    }

    const addNewUser = (user) =>{
        fetch('http://localhost:9393/users',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data =>{
           setAllUsers([...allUsers,data])
            
        })
        toggleDisplayForm(false)
    }

   
        const usersList = allUsers.map(u => <UserLink key={u.id} user={u} />)

        return (
            <div>
                <h1>Friend/Family List</h1>
                {usersList}
                {displayForm ? <UserForm addNewUser={addNewUser}/>: <button onClick={toggleDisplayForm} className="submit">Add People You Care!</button>}
            </div>
        )
    
}

export default Users


