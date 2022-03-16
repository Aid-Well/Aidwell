import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useNavigate, useNavigation} from 'react-router-dom';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  saveUser: (userInfo) => dispatch(actions.SAVE_USER(userInfo))
})

const LoginBox = (props) => {
  const navigate = useNavigate()
  const submitLogin = (event, usernameText, passwordText) => {
    event.preventDefault();
    const info = {
      username: usernameText.current.value,
      password: passwordText.current.value
    };
    axios({
      method: 'PUT',
      url: '/user/login',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: info
    })
    .then(data => {
      props.saveUser(data.data);
      navigate('/main');
    })
    .catch(err => alert('Sorry your login failed please try again'))
  }
    const usernameText = React.createRef();
    const passwordText = React.createRef();
    return (
      <div>
        <form onSubmit={(event) => submitLogin(event, usernameText, passwordText)}>
          <div className="loginText"> Welcome Back </div>
          <input ref={usernameText} placeholder="username" autoComplete="off" required></input>
          <input ref={passwordText} placeholder="password" type="password" autoComplete="off" required></input>
          <button type='submit'> LOG IN </button>
        </form>
      </div>
    )

}

export default connect(null, mapDispatchToProps)(LoginBox);