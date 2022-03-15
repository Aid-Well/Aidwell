import React from 'react';
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

//   const findChars = (el) => {
    
// }

  render() {
    return (
      <Link to = '/'>
      <button id = "login">back to login</button>
      </Link>
    )
  }
}

export default Main;