import React from 'react';
import axios from 'axios';

class SignUpBox extends React.Component {
  constructor() {
    super();
    this.submitRegister = this.submitRegister.bind(this)
  }
  
  submitRegister(event, usernameText, passwordText, emailText) {
    event.preventDefault();
    const info = {
      username: usernameText.current.value,
      email: emailText.current.value,
      password: passwordText.current.value
    };
    axios({
      method: 'POST',
      url: '/user/signUp',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: info
    })
    .then(data => console.log('successful account creation!:', data))
    .catch(err => console.log('err:', err))
  }

  render() {
    const usernameText = React.createRef();
    const passwordText = React.createRef();
    const emailText = React.createRef();
    return (
      <div>
        <form onSubmit={(event) => this.submitRegister(event, usernameText, passwordText, emailText)}>
          <div className="loginText"> Register for an Account</div>
          <input ref={usernameText} placeholder="username" autoComplete="off" required></input>
          <input ref={passwordText} placeholder="password" type="password" autoComplete="off" required></input>
          <input ref={emailText} placeholder="email" autoComplete="off" required></input>
          <button type='submit'> REGISTER </button>
        </form>
      </div>
    )
  }
}

export default SignUpBox;