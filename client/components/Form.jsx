import React from 'react';
import store from '../store.js';
import { getCharitiesServ } from '../reducers/reducer.js';
import axios from 'axios';

const Form = (props) =>{

const createBody = () => {
  return {
    search: document.getElementById('search').value,
    state: document.getElementById('State').value,
    city: document.getElementById('City').value,
    zip: document.getElementById('Zipcode').value,
    fundraisingOrgs: document.getElementById('fundraisingOrgs').value,
    sizeRange: document.getElementById('size').value,
    donorPrivacy: document.getElementById('donorPrivacy').value,
    scopeOfWork: document.getElementById('scopeofwork').value,
    noGovSupport: document.getElementById('noGovSupport').value,
  }
}

const resetFields = () => {
  document.getElementById('search').value = '';
  document.getElementById('State').value = '';
  document.getElementById('City').value = '';
  document.getElementById('Zipcode').value = '';
  document.getElementById('fundraisingOrgs').value = '';
  document.getElementById('size').value = '';
  document.getElementById('donorPrivacy').value = '';
  document.getElementById('scopeofwork').value = '';
  document.getElementById('noGovSupport').value = '';
}

const makeServerCall = (reqBody) => {
  axios({
    method: 'PUT',
    url: '/main/findCharities',
    // mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    data: reqBody
  })
  .then(data => store.dispatch(getCharitiesServ(data)))
  .catch(err => console.log('err:', err))
}
    
const handleSubmit = (el) => {
  el.preventDefault();
  const body = createBody();
  resetFields();
  makeServerCall(body);
}

return(
  <div>
    <form onSubmit = {handleSubmit}>
        <label htmlFor = 'search'>Charity Keyword: </label>
        <input type="text" id="search" name="search" /><br/>
      
        <label htmlFor = 'State'>State: </label>
        <input type="text" id="State" name="State" /><br/>

        <label htmlFor = 'City'>City: </label>
        <input type="text" id="City" name="City" /><br/>

        <label htmlFor = 'Zipcode'>Zipcode: </label>
        <input type="text" id="Zipcode" name="Zipcode" /><br/>

        <div className = 'dropdown'>
          <label htmlFor = "fundraisingOrgs">Fundraising for Charities: </label>
          <select name = "fundraisingOrgs" id = "fundraisingOrgs">
          <option disabled selected value> </option>
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>

        <div className = 'dropdown'>
          <label htmlFor = "size">Size: </label>
          <select name = "size" id = "size">
          <option disabled selected value> </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value='large'>Large</option>
          </select>
        </div>


        <div className = 'dropdown'>
          <label htmlFor = "donorPrivacy">Donor Privacy: </label>
          <select name = "donorPrivacy" id = "donorPrivacy">
          <option disabled selected value> </option>
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>

        <div className = 'dropdown'>
          <label htmlFor = "scopeofwork" >Scope of Work: </label>
          <select name = "scopeofwork" id = "scopeofwork">
          <option disabled selected value> </option>
          <option value="ALL">All </option>
          <option value="REGIONAL">Regional</option>
          <option value="NATIONAL">National</option>
          <option value="INTERNATIONAL">International</option>
          </select>
        </div>
      
        <div className = 'dropdown'>
          <label htmlFor = "noGovSupport">Government Support: </label>
          <select name = "noGovSupport" id = "noGovSupport">
          <option disabled selected value> </option>
          <option value="true">true</option>
          <option value="false">false</option>
          </select>
        </div>
        <button type = 'submit' className ='formSubmit'>Submit</button>
    </form>
  </div>
  )
};

export default Form;