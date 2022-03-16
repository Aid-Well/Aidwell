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
      <div>
        <Link to = '/'>
        <button id = "login">back to login</button>
        </Link>

        <Link to = '/searchResults'>
        <button id = "searchResults">search results</button>
        </Link>
      </div>
    )
  }
}

export default Main;