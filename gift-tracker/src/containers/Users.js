// import React, { Component } from 'react'
import React,{useState, useEffect} from 'react'
import UserLink from '../components/UserLink'
import UserForm from './UserForm'

// class Users extends Component {
//     state = {
//         allUsers: [],
//         displayForm: false
//     }
    
//     componentDidMount(){
//         fetch('http://localhost:9393/users')
//         .then(response => response.json())
//         .then(data => {
//            console.log(data)
//           this.setState({
//               allUsers: data
//             })
//         }
//         )
//     }

//     toggleDisplayForm = () => {
//         let newBoolean = !this.state.displayForm
//         console.log(newBoolean)
//         this.setState({
//             displayForm: newBoolean
//         })
//     }

//     addNewUser = (user) =>{
//         fetch('http://localhost:9393/users',{
//           method: "POST",
//           headers:{
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//           body:JSON.stringify(user)
//         })
//         .then(resp => resp.json())
//         .then(data =>{
//             this.setState({
//                 allUsers:[...this.state.allUsers, data]
//             })
//         })
//         this.toggleDisplayForm()
//     }

//     render() {
//         const usersList = this.state.allUsers.map(userE => <UserLink key={userE.id} user={userE} deleteUser={this.deleteUser}/>)

//         return (
//             <div>
//                 <h1>Friend/Family List</h1>
//                 {usersList}
//                 {this.state.displayForm ? <UserForm addNewUser={this.addNewUser}/>: <button onClick={this.toggleDisplayForm} className="submit">Add People You Care!</button>}
//             </div>
//         )
//     }
// }

// export default Users


const Users = () => {

    const [allUsers, setAllUsers] = useState([])
    const [displayForm, setDisplayForm] = useState(false)
    // state = {
    //     allUsers: [],
    //     displayForm: false
    // }
    
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

