import React,{useState} from 'react'


const UserForm = ({addNewUser}) => {
    const [name, setName] = useState([])


    const handleChange = (event) =>{
        console.log(event)
        setName(event.target.value)
    }

   const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        addNewUser({
           name: name   
        })
    }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                <label for="">Name: </label> <br />
                    <input type="text" name="name" value= {name} placeholder="Enter your friend's name" onChange={handleChange} />
                    <br/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    
}

export default UserForm