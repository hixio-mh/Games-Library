import { combineReducers } from 'redux';
import appReducer from './app_reducer';
import actionReducer from './nav_action_reducer';
import gamesCollection from './game_collection_reducer';

export default combineReducers({
  appReducer,
  actionReducer,
  gamesCollection,
});