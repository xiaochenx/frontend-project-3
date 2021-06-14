import React, { useState, useEffect }  from 'react'
import Gift from '../components/Gift'
import GiftForm from './GiftForm'

 const User = (props) => {
    const [user, setUser] = useState({
        gifts: []
    })
   
    const [giftFormFlag, setGiftFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9393/users/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setUser(data)
        })
    }, [props.match.params.id])

    const toggleForm = () => {
        let newBoolean = !giftFormFlag
        setGiftFormFlag(newBoolean)
    }

    const addNewGift = (gift) => {
        fetch(`http://localhost:9393/users/${user.id}/gifts`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(gift)
        })
        .then(resp => resp.json())
        .then(data =>{
            setUser({
                ...user,
                gifts: [...user.gifts, data]
            })
        })
        toggleForm()
    }

    const deleteGift = (id) =>{
        fetch(`http://localhost:9393/users/${user.id}/gifts/${id}`,{
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          },
        })
        .then(() => {
            const newGifts = user.gifts.filter(e => e.id !=id)
            setUser({
                ...user,
                gifts: newGifts
            }) 
        })
    }


  

    const gifts = user.gifts.map(g => <Gift key={g.id} gift={g} deleteTheGift={deleteGift}/>)

    return (
        <div>
            <br/>
            <h1>Below Are All Your Gift Ideas</h1>
            <h1>for</h1>
            <br />
            <h2>{user.name}</h2>
            <br/>
            <hr/>
            {gifts}
            <br/>
            {giftFormFlag ? <GiftForm newGift={addNewGift} user={user}/> : <button onClick={toggleForm} className="submit">Add gift</button>}
            <br/>
            <br/>
                            
        </div>
    )
}
export default User