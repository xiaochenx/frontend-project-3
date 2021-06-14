import React, { Component } from 'react'

class GiftForm extends Component {
    state ={
        name:''
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newGift({
            name: this.state.name,
            
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <h3>Add New Gift</h3>
                    <input type="text" name="name" value= {this.state.name} placeholder="Amazing gift idea!" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <input type="submit" name="submit" value="Add Idea!" />
                </form>
            </div>
        )
    }
}
export default GiftForm



