import React, { useState, useEffect }  from 'react'
import Gift from '../components/Gift'
import GiftForm from './GiftForm'

 const User = (props) => {
    const [user, setUser] = useState({
        gifts: []
    })
    // const [userCost, setUserCost] = useState(0)
    const [giftFormFlag, setGiftFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/users/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            setUser(data)
        })
    }, [props.match.params.id])

    const toggleForm = () => {
        let newBoolean = !giftFormFlag
        setGiftFormFlag(newBoolean)
    }

    const addNewGift = (gift) => {
        fetch(`http://localhost:9292/users/${user.id}/gifts`,{
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
        fetch(`http://localhost:9292/users/${user.id}/gifts/${id}`,{
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

    // const editGift = (gift) =>{
    //     fetch(`http://localhost:9292/users/${user.id}/gifts/${gift.id}`,{
    //       method: "PATCH",
    //       headers:{
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       },
    //       body:JSON.stringify(gift)
    //     })
    //     .then(resp => resp.json())
    //     .then(data =>{
    //         const newGifts = user.gifts.map(e => e.id !=data.id ? e : data)
    //         setUser({
    //             ...user,
    //             gifts: newGifts
    //         })
    //     })
    // }

  

    const gifts = user.gifts.map(g => <Gift key={g.id} gift={g} deleteTheGift={deleteGift}/>)

    return (
        <div>
            <br/>
            <h1>{user.name}</h1>
            <h3>Below Are All Your Gift Ideas:</h3>
            <br/>
            {gifts}
            <br/>
            {giftFormFlag ? <GiftForm newGift={addNewGift} user={user}/> : <button onClick={toggleForm} className="submit">Add gift</button>}
            <br/>
            <br/>
                            
        </div>
    )
}
export default User