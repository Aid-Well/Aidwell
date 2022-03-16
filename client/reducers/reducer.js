const initialState = {
  charities: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  console.log('hello? ', action.payload)
  switch (action.type) {
    case "GET_CHARITIES":
      return { ...state, charities: action.payload };
    case 'SAVE_USER':
      const newState = { ...state };
      newState.user = action.payload;
      console.log('newState', newState);
      return newState;
    default: {
      return state;
    }
  }
};
export default reducer;
