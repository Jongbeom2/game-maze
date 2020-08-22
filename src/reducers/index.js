import {combineReducers} from 'redux';
import control from './control';
import character from './character';
const reducers = combineReducers({
  control, character
});

export default reducers;