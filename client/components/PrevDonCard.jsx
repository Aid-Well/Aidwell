import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userInfo) => dispatch(actions.SAVE_USER(userInfo))
})

const PrevDonCard = (props) => {
  const handleSubmit = () => {
    const donationAmount = window.prompt('Enter donation amount.');
    const body = {
      charityName: props.charityName,
      donationAmount: donationAmount,
      username: props.username
    }
    axios({
      method: 'POST',
      url: '/user/makeAD',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: body
    })
      .then(data => {
        props.updateUser(data.data);
      })
      .catch(err => alert('Sorry donation failed. Please try again later'))
  }

  const handleFavorite = () => {
    const body = {
      charityName: props.charityName,
      username: props.username,
    }
    axios({
      method: 'PUT',
      url: '/user/changeFav',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: body
    })
      .then(data => {
        props.updateUser(data.data);
      })
      .catch(err => alert('Sorry Fav Failed'))
  }

  return (
    <div className="prevDonCard" style={props.favorite ? { background: 'gold' } : {}}>
      <button onClick={handleSubmit}>
        <img src={props.catImage ? props.catImage : props.causeImage} alt="Charity logo" className="prevImage" />
      </button>
      <p className='prevDetails'>
        Charity Name: {props.charityName}<br />
        Donation Amount: ${props.donationAmount}.00<br />
        Last Donated: {new Date(props.lastDonation).toDateString()}<br />
      </p>
      <button onClick={handleFavorite} className="favButton">Favorite</button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(PrevDonCard);