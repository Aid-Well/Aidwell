import React from 'react';
import store from '../store.js';
import { getCharitiesServ } from '../store.js'

const Form = () =>{
    
const handleSubmit = (el) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ charities: el })
    };
    fetch('/findCharities', requestOptions)
    .then(res => res.json())
    .then(res => store.dispatch(getCharitiesServ()))
}



return(
  <div>
    <button onClick ={()=> className ='closeDetails'}>X</button>
    <form onSubmit = {handleSubmit}>
        <div className = 'formText'>Keyword of Charity you are looking for</div>
        <div className = 'formText'>State</div>
        <div className = 'formText'>City</div>
        <div className = 'formText'>Zipcode</div>
        <div className = 'formText'>Size: Regional, National, International</div>
        <div className ='checkboxes'>
          <div className = 'checkbox'>
            <input type='checkbox' name = 'donorPrivacy'></input>
            <label>Would you like to Make your contributions private?</label><br/>
          </div>
          <div className = 'checkbox'>
            <input type='checkbox' name = 'govSupport'></input>
            <label>Government Support</label><br/>
          </div>
          <div className = 'checkbox'>
            <input type='checkbox' name = 'fundrasingOrgs'></input>
            <label>Fundraising for Charities</label><br/>
          </div>
        </div>
        <button type = 'submit' className ='formSubmit'>Submit</button>
    </form>
  </div>
  )
};

export default Form;