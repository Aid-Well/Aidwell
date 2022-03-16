import React from 'react';

const Card = (props) => {

    return (
        <div className="charitycard">
            {props.name}
            {props.mission}
            {props.link}
            {props.catImage}
            {props.causeImage}
          <div className = 'ratings'>
            {props.overAllScore}
            {props.financialRating}
            {props.accountabilityRating}
          </div>
            {props.deductibility}
            {props.ein}
        </div>
    )
}

export default Card;