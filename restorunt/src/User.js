import React, { Component } from 'react'

 class User extends Component {
  render() {
    if(true)
    {
        throw new Error("Custom error")
    }
    return (
      <div>
        <h2> User Component</h2>
      </div>
    );
  }
}
export default User; 