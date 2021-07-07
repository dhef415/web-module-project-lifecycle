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
            console.log(res.data);
            this.setState({
                followers: res.data,
            })
        })
        .catch(err=> console.log(err));
        
    }

    render() {
        const {followers} = this.state;
        if(!this.state.followers.length === 0) return <p style={{color:'red'}}>Loading... 😎Be Patient It Ain't That Serious!😎</p>
        return (
            <div>
                <h2 style={{color:'blueviolet'}}>Followers:</h2>
               {followers.map(followers => (
                   <div key={followers.id} className='follower_card'>
                       <img
                       style={{width: '80px',borderRadius:'50%', margin:'10px'}}
                       src={followers.avatar_url}
                       alt={followers.name} />
                       <h4 style={{color: 'lightgreen'}}>{followers.login}</h4>
                       

                       

                        <a style={{color: 'lightgreen'}} href={followers.html_url}>Check Out My Github!</a>
                   </div>
               ))} 
            </div>
        )
    }
}

export default Followers;