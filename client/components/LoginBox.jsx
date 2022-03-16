import React from 'react';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="loginText">Welcome Back!</div>
        <button> LOGIN </button>
      </div>
    )
  }
}

export default LoginBox;