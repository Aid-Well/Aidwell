import { GET_CHARITIES } from "../actions/actions";

const initialState = {
    charities: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "GET_CHARITIES":
          return {...state, charities: action.payload};
      default: {
        return state;
      }
    }
    };

// export const getCharitiesServ = () => async (dispatch) => {
//     console.log('getting events')
//     return fetch('/main/findCharities')
//     .then(res => res.json())
//     .then(res => dispatch(GET_CHARITIES(res)))
//     }


export const getCharitiesServ = () => (dispatch) => {
  const tester = dispatch(GET_CHARITIES([
    {
    name: 'name1',
    mission: 'mission1',
    link: 'link1',
    catImage: 'catImage1',
    causeImage: 'causeImage1',
    overAllScore: 'overAllScore1',
    financialRating: 'financialRating1',
    accountabilityRating: 'accountabilityRating1',
    deductibility: 'deductibility1',
    ein: 'ein1'
  },
  {
    name: 'name2',
    mission: 'mission2',
    link: 'link2',
    catImage: 'catImage2',
    causeImage: 'causeImage2',
    overAllScore: 'overAllScore2',
    financialRating: 'financialRating2',
    accountabilityRating: 'accountabilityRating2',
    deductibility: 'deductibility2',
    ein: 'ein2'
  },
  {
    name: 'name3',
    mission: 'mission3',
    link: 'link3',
    catImage: 'catImage3',
    causeImage: 'causeImage3',
    overAllScore: 'overAllScore3',
    financialRating: 'financialRating3',
    accountabilityRating: 'accountabilityRating3',
    deductibility: 'deductibility3',
    ein: 'ein3'
  }
]))
  return tester;
}

export default reducer