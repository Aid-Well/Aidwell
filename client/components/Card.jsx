import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userInfo) => dispatch(actions.SAVE_USER(userInfo))
})

const Card = (props) => {
  const handleSubmit = () => {
    const donationAmount = window.prompt('Enter donation amount.');
    const body = {
      charityName: props.name,
      donationAmount: donationAmount,
      username: props.username,
      catImage: props.catImage,
      causeImage: props.causeImage
    }

    axios({
      method: 'POST',
      url: '/user/makeAD',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: body
    })
      .then(data => {
        console.log(data.data);
        props.updateUser(data.data);
      })
      .catch(err => alert('Sorry donation failed. Please try again later'))
  }

  return (
    <div className="charitycard">
      <button onClick={handleSubmit}>
        <img src={props.catImage ? props.catImage : props.causeImage} alt="Charity logo" className="image" />
      </button>
      <p className='ratings'>
        <a href={props.link}>{props.name}</a><br />
        Overall Score: {props.overAllScore}<br />
        Financial Score: {props.financialRating}<br />
        Accountability Score: {props.accountabilityRating}<br />
        Deductability Status: {props.deductibility}<br />
        EIN: {props.ein}<br />
      </p>
      <div className='information'>
        Mission Statement:{props.mission}
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Card);