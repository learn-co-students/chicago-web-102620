import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth'

class Navbar extends React.Component {

  handleClick = () => {
    localStorage.removeItem('jwt_token')
    this.props.logoutUser()
  }

  render() {
    return (
      <div className={`ui inverted yellow menu`}>
        <Link to='/dashboard' className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <div className="item">
            {
              this.props.currentUser ?
              <Link to='/login' className="ui button" onClick={this.handleClick}>
                Logout
              </Link>
              :
              <Link to='/login' className="ui button">
                Login
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)






