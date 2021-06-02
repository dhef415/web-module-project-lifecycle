import axios from 'axios';
import React, { Component } from 'react'

class User extends Component {
    state = {
        user: '',
        
        
        
        
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/dhef415')
        .then((res) => {
            console.log(res.data);
            this.setState({user: res.data})
        })
        .catch((err) => console.log(err));

    }

    render() {
        const {user} = this.state;
        if (!this.state.user) return <p>Loading...</p>
        return (
            <div>
                <h3>{user.name}</h3>
                <img 
                style={{width: '150px',borderRadius:'50%'}}
                src={user.avatar_url}
                alt={user.name} />
                <h4>Username: {user.login}</h4>
                <p>Location: {user.location}</p>
            </div>
        )
    }
}
export default User;
