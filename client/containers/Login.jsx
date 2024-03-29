import React from 'react';
import '../styles.css'
import { Link } from "react-router-dom";
import LoginBox from '../components/LoginBox'
import SignUpBox from '../components/SignUpBox'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      displayLoginBox: true,
    }
    this.toggleLoginBox = this.toggleLoginBox.bind(this);
  }

  toggleLoginBox() {
    if (!this.state.displayLoginBox) this.setState({ displayLoginBox: true })
    else this.setState({ displayLoginBox: false });
  }


  render() {
    return (
      <div className="frontpageText">
        {this.state.displayLoginBox ?
          <div>
            <LoginBox />
            <button onClick={() => this.toggleLoginBox()} className="buttonStyle">Register </button>
          </div>
          :
          <div>
            <SignUpBox />
            <button onClick={() => this.toggleLoginBox()} className="buttonStyle">Back to Login </button>
          </div>
        }
      </div>
    )
  }
}

export default Login;