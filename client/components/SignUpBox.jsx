import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  saveUser: (userInfo) => dispatch(actions.SAVE_USER(userInfo))
})

const LoginBox = (props) => {
  const navigate = useNavigate()

  const submitRegister = (event, usernameText, passwordText, emailText) => {
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
      .then(data => {
        props.saveUser(data.data);
        navigate('/main')
      })
      .catch(err => console.log('err:', err))
  }


  const usernameText = React.createRef();
  const passwordText = React.createRef();
  const emailText = React.createRef();
  return (
    <div className='signupBox'>
      <form onSubmit={(event) => submitRegister(event, usernameText, passwordText, emailText)}>
        <div className="signupText"> Register for an Account</div>
        <center>
          <input ref={usernameText} placeholder="username" autoComplete="off" required></input>
          <br/>
          <input ref={passwordText} placeholder="password" type="password" autoComplete="off" required></input>
          <br/>
          <input ref={emailText} placeholder="email" autoComplete="off" required></input><br/>
          <button type='submit'> REGISTER </button>
        </center>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(LoginBox);