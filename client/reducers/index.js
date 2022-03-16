import { combineReducers } from 'redux';
import reducer from './reducer';

// combine reducers
const reducers = combineReducers({
// if we had other reducers, they would go here
    state: reducer
  });

// make the combined reducers available for import
export default reducers;