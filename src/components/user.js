import React, {Component} from 'react';

class User extends Component{
  constructor() {
    super();
    this.state = {
      oneUser: {}

    }
  }
  componentDidMount() {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${this.props.user_id}`)
        .then(res => res.json())
        .then(json => {
          this.setState({oneUser: json});
        });
  }
  render(){
    return (
      <div id="user" className="col-5 left-column">
        <img id="user-pic" alt="ProfilePic" src={this.state.oneUser.image_url} />
        <ul id="user-info">
          <h4>{this.state.oneUser.name}</h4>
          <li>{this.state.oneUser.age}</li>
          <li>{this.state.oneUser.gender}</li>
          <li>{this.state.oneUser.description}</li>
          <li>{this.state.oneUser.location}</li>
        </ul>
        <div className="btnpad">
          <button className="btn btn-primary" onClick={this.props.onDeleteClick}> Delete Profile </button>
        </div>
      </div>
    )
  }
}

export default User
