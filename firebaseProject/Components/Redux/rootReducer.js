import {combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  item: reducer,
});

export default rootReducer;
