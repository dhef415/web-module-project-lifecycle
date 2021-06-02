import React, { Component } from 'react'
import axios from 'axios';

class Followers extends Component {
    state = {
        followers: [],
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/dhef415/followers')
        .then(res => {
            this.setState({
                followers: res.data,
            })
        })
        .catch(err=> console.log(err));
    }

    render() {
        const {followers} = this.state;
        if(!this.state.followers.length === 0) return <p>Loading...</p>
        return (
            <div>
               {followers.map(followers => (
                   <div key={followers.id} className='follower_card'>
                       <h4>{followers.login}</h4>
                   </div>
               ))} 
            </div>
        )
    }
}

export default Followers;