import React from 'react';
import { Link } from "react-router-dom";
import Form from '../components/Form'
import SearchResults from '../components/SearchResults'

class Main extends React.Component {
  constructor(props) {
    super(props);
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

export default Main;