
import React,{useState} from 'react'

const GiftForm = ({newGift}) => {
    const [name, setName] = useState([])

    const handleChange = (event) =>{
        setName(event.target.value)
           }

    const handleSubmit = (event) => {
        event.preventDefault()
        newGift({
            name: name,     
        })
    }

   
        return (
            <div>
               <form onSubmit={handleSubmit}>
                    <h3>Add New Gift</h3>
                    <input type="text" name="name" value= {name} placeholder="Amazing gift idea!" onChange={handleChange} />
                    <br/>
                    <br/>
                    <input type="submit" name="submit" value="Add Idea!" />
                </form>
            </div>
        )
    
}
export default GiftForm



