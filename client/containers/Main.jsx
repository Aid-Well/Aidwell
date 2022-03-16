import React from 'react';
import { Link } from "react-router-dom";
import Form from '../components/Form'
import SearchResults from '../components/SearchResults'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.state.user
})


class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('state:', props.user);
  }

  render() {
    return (
      <div>
        <Form/>
        <SearchResults/>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Main);