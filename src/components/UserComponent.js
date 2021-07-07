import axios from 'axios';
import React, { Component } from 'react'

class User extends Component {
    state = {
        user: '',  
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/dhef415')
        .then((res) => {
            console.log(res.data);
            this.setState({user: res.data})
        })
        .catch((err) => console.log(err));

    }

    render() {
        const {user} = this.state;
        if (!this.state.user) return <p style={{color:'white'}}>Loading... 😎Be Patient It Ain't That Serious!😎</p>
        return (
            <div>
                <h2 style={{color: 'white', fontFamily:'serif'}}>{user.name}</h2>
                <img 
                style={{width: '150px',borderRadius:'50%'}}
                src={user.avatar_url}
                alt={user.name} />
                <h4 style={{color:'white'}}>Username: {user.login}</h4>
                <h4 style={{color:'white'}}>Location: 🌴{user.location}🌴</h4>
            </div>
        )
    }
}
export default User;
