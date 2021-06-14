import React from 'react'

 const Gift = (props) => {
 
    const handleClick = () => { 
        props.deleteTheGift(props.gift.id)
    }

    return (
        <div>
          <h3>{props.gift.name}</h3>
        <button onClick={handleClick}>Delete</button> 
        </div>
    )
}

export default Gift


