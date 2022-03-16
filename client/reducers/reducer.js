import { GET_CHARITIES } from "../actions/actions";

const initialState = {
    charities: []
};

const reducer = (state = initialState, action) => {
  console.log('hello? ', action.payload)
    switch(action.type) {
      case "GET_CHARITIES":
          return {...state, charities: action.payload};
      default: {
        return state;
      }
    }
    };


export default reducer