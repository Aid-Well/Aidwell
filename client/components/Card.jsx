import React from 'react';

const Card = (props) => {

    return (
        <div className="charities">
            {props.name}
            {props.mission}
            {props.link}
            {props.catImage}
            {props.causeImage}
            {props.overAllScore}
            {props.financialRating}
            {props.accountabilityRating}
            {props.deductibility}
            {props.ein}
        </div>
    )
}

export default Card;