import React from 'react';
import store from '../store.js';
import { Link } from "react-router-dom";
import { getCharitiesServ } from '../reducers/reducer.js';
import axios from 'axios';

const Form = (props) =>{

const createBody = () => {
  return {
    search: document.getElementById('search').value,
    fundraisingOrgs: document.getElementById('fundraisingOrgs').value,
    state: document.getElementById('State').value,
    zip: document.getElementById('Zipcode').value,
    sizeRange: document.getElementById('size').value,
    donorPrivacy: document.getElementById('donorPrivacy').value,
    scopeOfWork: document.getElementById('scopeofwork').value,
    noGovSupport: document.getElementById('noGovSupport').value,
  }
}

const resetFields = () => {
  document.getElementById('search').value = '';
  document.getElementById('fundraisingOrgs').value = '';
  document.getElementById('State').value = '';
  document.getElementById('Zipcode').value = '';
  document.getElementById('size').value = '';
  document.getElementById('donorPrivacy').value = '';
  document.getElementById('scopeofwork').value = '';
}

const makeServerCall = (reqBody) => {
  // const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: reqBody,
  // };
  // fetch('/main/findCharities', requestOptions)
  // // console.log('res before json: ', res)
  // .then(res => res.json())
  // // console.log(res);
  // .then(res => console.log(res))
  axios({
    method: 'PUT',
    url: '/main/findCharities',
    // mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    data: reqBody
  })
  .then(data => console.log('successful account creation!:', data))
  .catch(err => console.log('err:', err))
}

const closeForm = () => props.setPopup(false);
    
const handleSubmit = (el) => {
  el.preventDefault();
  const body = createBody();
  console.log(body);
  resetFields();
  makeServerCall(body);
  closeForm();
}



return(
  <div>
    <form onSubmit = {handleSubmit}>
        <label htmlFor = 'search'>Keyword of Charity you are looking for: </label>
        <input type="text" id="search" name="search" />
        
        <div className = 'dropdown'>
          <label htmlFor = "fundraisingOrgs">Fundraising for Charities: </label>
          <select name = "fundraisingOrgs" id = "fundraisingOrgs">
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>

        <label htmlFor = 'State'>State: </label>
        <input type="text" id="State" name="State" /><br/>

        <label htmlFor = 'City'>City: </label>
        <input type="text" id="City" name="City" /><br/>

        <label htmlFor = 'Zipcode'>Zipcode: </label>
        <input type="text" id="Zipcode" name="Zipcode" /><br/>

        <div className = 'dropdown'>
          <label htmlFor = "size">Size: </label>
          <select name = "size" id = "size">
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value='large'>large</option>
          </select>
        </div>


        <div className = 'dropdown'>
          <label htmlFor = "donorPrivacy">Donor Privacy: </label>
          <select name = "donorPrivacy" id = "donorPrivacy">
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>

        <div className = 'dropdown'>
          <label htmlFor = "scopeofwork" >Scope of Work: </label>
          <select name = "scopeofwork" id = "scopeofwork">
          <option value="All">All </option>
          <option value="Regional">Regional</option>
          <option value="National">National</option>
          <option value="International">International</option>
          </select>
        </div>
      
        <div className = 'dropdown'>
          <label htmlFor = "noGovSupport">Government Support: </label>
          <select name = "noGovSupport" id = "noGovSupport">
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>
        {/* <Link to ='SearchResults'> */}
        <button type = 'submit' className ='formSubmit'>Submit</button>
        {/* </Link> */}
    </form>
  </div>
  )
};

export default Form;