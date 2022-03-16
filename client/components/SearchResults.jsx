import React from 'react';
import store from '../store.js';
import { getCharitiesServ } from '../reducers/reducer.js';
import { connect } from 'react-redux';
import Card from './Card.jsx';
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
    charities: state.state.charities
  })

class SearchResults extends React.Component {
    constructor(props) {
      super(props);
    }
     
    render() {
        const charities = [];
        console.log('here!', this.props?.charities)
        for (let i = 0; i < this.props?.charities.length; i++) {
            charities.push(<Card 
                name = {this.props.charities[i].name}
                mission = {this.props.charities[i].mission}
                link = {this.props.charities[i].link}
                catImage = {this.props.charities[i].catImage}
                causeImage = {this.props.charities[i].causeImage}
                overAllScore = {this.props.charities[i].overAllScore}
                financialRating = {this.props.charities[i].financialRating}
                accountabilityRating = {this.props.charities[i].accountabilityRating}
                deductibility = {this.props.charities[i].deductibility}
                ein = {this.props.charities[i].ein}
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