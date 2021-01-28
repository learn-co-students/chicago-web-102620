import React from 'react';
import { connect } from 'react-redux'

import { currentUser } from '../actions/auth'


class Dashboard extends React.Component {
  componentDidMount(){

    const token = localStorage.getItem('jwt_token')

    if (!token) {
      this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }


      fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.currentUser(data.user)
      })

    }



    // check if theres a token
    // if none:
    //  redirect to login
    // if there is a token:
    //    send back the token to the BE
    //    BE will decode the token and produce the user
    //    update the store with the user info that the backend sends back


  }

  renderPosts = () => {
    return this.props.posts.map(p => {
      return (
        <div>
          <h4>{p.title}</h4>
          <p>{p.content}</p>
        </div>
      )

    })
    
  }

  render(){
    return (
      <div>
          <h5>Your Posts</h5>
          {this.renderPosts()}
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    posts: state.posts
  }
}

const mapDispatchToProps = {
  currentUser: currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)








