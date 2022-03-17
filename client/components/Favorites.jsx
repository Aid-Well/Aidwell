import React from 'react';
import { connect } from 'react-redux';
import store from '../store.js';

const mapStateToProps = state => ({
  favorites: state.state.user
})

class PreviousDonations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('in favs!')
    console.log('favorites:', this.props.favorites)

    return (
      <div className='previousDonations'>
        FAVORITES
      </ div>
    )
    // const favs = [];
    // for (let i = 0; i < this.props.users.)
  }
}

export default connect(mapStateToProps, null)(PreviousDonations);
