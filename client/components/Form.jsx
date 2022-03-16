import React from 'react';
import store from '../store.js';
import { getCharitiesServ } from '../reducers/reducer.js';
import axios from 'axios';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  addCharitiesToState: (charityInfo) => {
    dispatch(actions.GET_CHARITIES(charityInfo))
  }
})

const Form = (props) => {

  const createBody = () => {
    return {
      search: document.getElementById('search').value,
      state: document.getElementById('State').value,
      city: document.getElementById('City').value,
      zip: document.getElementById('Zipcode').value,
      sizeRange: document.getElementById('size').value === 'true' ? '' : document.getElementById('size').value, //?
      scopeOfWork: document.getElementById('scopeofwork').value === 'true' ? '' : document.getElementById('scopeofwork').value, //?
      fundraisingOrgs: document.getElementById('fundraisingOrgs').value === 'true' || document.getElementById('fundraisingOrgs').value === '' ? true : false,
      donorPrivacy: document.getElementById('donorPrivacy').value === 'true' || document.getElementById('donorPrivacy').value === '' ? true : false,
      // noGovSupport: document.getElementById('noGovSupport').value === 'true' || document.getElementById('noGovSupport').value === '' ? true : false,
    }
  }

  const resetFields = () => {
    document.getElementById('search').value = '';
    document.getElementById('State').value = '';
    document.getElementById('City').value = '';
    document.getElementById('Zipcode').value = '';
  }

  const makeServerCall = (reqBody) => {

    axios({
      method: 'PUT',
      url: '/main/findCharities',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: reqBody
    })
      .then(data => props.addCharitiesToState(data.data))
      .catch(err => {
        window.alert('No results available. Please try again.');
        console.log('err:', err)
      }
      )
  }

  const handleSubmit = (el) => {
    el.preventDefault();
    const body = createBody();
    console.log(body)
    // resetFields();
    makeServerCall(body);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Charity Keyword: </label>
        <input type="text" id="search" name="search" /><br />

        <label htmlFor='State'>State: </label>
        <input type="text" id="State" name="State" /><br />

        <label htmlFor='City'>City: </label>
        <input type="text" id="City" name="City" /><br />

        <label htmlFor='Zipcode'>Zipcode: </label>
        <input type="text" id="Zipcode" name="Zipcode" /><br />

        <div className='dropdown'>
          <label htmlFor="fundraisingOrgs">Fundraising for Charities: </label>
          <select name="fundraisingOrgs" id="fundraisingOrgs">
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>

        <div className='dropdown'>
          <label htmlFor="size">Size: </label>
          <select name="size" id="size">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value='large'>large</option>
          </select>
        </div>


        <div className='dropdown'>
          <label htmlFor="donorPrivacy">Donor Privacy: </label>
          <select name="donorPrivacy" id="donorPrivacy">
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>

        <div className='dropdown'>
          <label htmlFor="scopeofwork" >Scope of Work: </label>
          <select name="scopeofwork" id="scopeofwork">
            <option value="ALL">ALL </option>
            <option value="REGIONAL">REGIONAL</option>
            <option value="NATIONAL">NATIONAL</option>
            <option value="INTERNATIONAL">INTERNATIONAL</option>
          </select>
        </div>

        {/* <div className = 'dropdown'>
          <label htmlFor = "noGovSupport">Government Support: </label>
          <select name = "noGovSupport" id = "noGovSupport">
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div> */}
        <button type='submit' className='formSubmit'>Submit</button>
      </form>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Form);