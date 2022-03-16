import React from 'react';
import store from '../store.js';
import { getCharitiesServ } from '../reducers/reducer.js';
import { connect } from 'react-redux';
import Card from './Card.jsx';
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
    charities: state.charities
  })

class SearchResults extends React.Component {
    constructor(props) {
      super(props);
    }
     
    render() {
        const charities = [];
        for (let i = 0; i < this.props.charities.charities.length; i++) {
            charities.push(<Card 
                name = {this.props.charities.charities[i].name}
                mission = {this.props.charities.charities[i].mission}
                link = {this.props.charities.charities[i].link}
                catImage = {this.props.charities.charities[i].catImage}
                causeImage = {this.props.charities.charities[i].causeImage}
                overAllScore = {this.props.charities.charities[i].overAllScore}
                financialRating = {this.props.charities.charities[i].financialRating}
                accountabilityRating = {this.props.charities.charities[i].accountabilityRating}
                deductibility = {this.props.charities.charities[i].deductibility}
                ein = {this.props.charities.charities[i].ein}
            />)
        }
        
      return (
        <div>
          {charities}
        </div>
      );
    }
  }

  export default connect(mapStateToProps, null)(SearchResults);