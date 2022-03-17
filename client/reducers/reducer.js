const initialState = {
  charities: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case "GET_CHARITIES":
      return { ...state, charities: action.payload };
    case 'SAVE_USER':
      const newState = { ...state };
      newState.user = action.payload;
      return newState;
    default: {
      return state;
    }
  }
};
export default reducer;
