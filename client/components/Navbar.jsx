import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from './Form.jsx'

const Navbar = (props) => {

const [popup, setPopup] = useState(false);

    return (
      <div id='nav'>
        <div id='user-container'>
          <button id="logout">Logout</button>
          <button id='Find Charities' onClick={() => setPopup(!popup)}>Find Charities</button>
        <Link to=''>
          <button id='user-icon'>
            <img src='https://img.icons8.com/small/32/000000/gender-neutral-user.png'/>
          </button>
        </Link>
        </div>
        {popup ? <Form setPopup={setPopup}/> : null}
      </div>
    )
}
  
  export default Navbar;