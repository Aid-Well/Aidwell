import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card.jsx';
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
    charities: state.charities
  })

class SearchResults extends React.Component {
    constructor(props) {
      super(props);
    }
    
    componentDidMount() {
        // store.dispatch(getCharitiesServ());
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
          <Link to = '/main'>
          <button id = "main"> main </button>
          </Link>
        </div>
      );
    }
  }

  export default connect(mapStateToProps, null)(SearchResults);

//   name: 'test1',
//   mission: 'test1',
//   link: 'test1',
//   catImage: 'test1',
//   causeImage: 'test1',
//   overAllScore: 'test1',
//   financialRating: 'test1',
//   accountabilityRating: 'test1',
//   deductibility: 'test1',
//   ein: 'test1'