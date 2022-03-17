import React from 'react';
import Form from '../components/Form'
import SearchResults from '../components/SearchResults'
import PreviousDonations from '../components/PreviousDonations'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.state.user
})


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gridContainer">
        <Form />
        <PreviousDonations />
        <SearchResults />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Main);