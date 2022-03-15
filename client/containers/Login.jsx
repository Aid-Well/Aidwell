import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to = 'main'>
      <button id = "main">to main</button>
      </Link>
    )
  }
}

export default Login;