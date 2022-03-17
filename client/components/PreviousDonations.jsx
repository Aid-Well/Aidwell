import React from 'react';
import { connect } from 'react-redux';
import PrevDonCard from './PrevDonCard';

const mapStateToProps = state => ({
  user: state.state.user
})

class PreviousDonations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const charities = []
    for (let i = 0; i < this.props.user.charities.length; i++) {
      charities.push(
        <PrevDonCard {...this.props.user.charities[i]} username={this.props.user.username} />
      )
    }
    return (
      <div className='PreviousDonations!'>
        <strong>PREVIOUS DONATIONS</strong>
        {charities}
      </ div>
    )
  }
}

export default connect(mapStateToProps, null)(PreviousDonations);
