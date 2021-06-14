import React, { Component } from 'react'

 class UserForm extends Component {
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
        this.props.addNewUser({
            name: this.state.name   
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label for="">Name: </label> <br />
                    <input type="text" name="name" value= {this.state.name} placeholder="Enter your friend's name" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default UserForm