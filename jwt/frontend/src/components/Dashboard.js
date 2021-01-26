import React from 'react';
import { connect } from 'react-redux'

import { currentUser } from '../actions/auth'


class Dashboard extends React.Component {
  componentDidMount(){
    if (!this.props.currentUser) {
      this.props.history.push('/login')
    }
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

export default connect(mapStateToProps)(Dashboard)








