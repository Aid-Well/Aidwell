import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.state.user
})


class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('state:', props.user);
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

export default connect(mapStateToProps, null)(Main);