import React from 'react';

const Card = (props) => {
  return (
    <div className="charitycard">
      <img src={props.catImage ? props.catImage : props.causeImage} alt="Charity logo" className="image" />
      <p className='ratings'>
        <a href={props.link}>{props.name}</a><br />
        Overall Score: {props.overAllScore}<br />
        Financial Score: {props.financialRating}<br />
        Accountability Score: {props.accountabilityRating}<br />
        Deductability Status: {props.deductibility}<br />
        EIN: {props.ein}<br />
      </p>
      <div className='information'>
        {props.mission}
      </div>
    </div>
  )
}

export default Card;