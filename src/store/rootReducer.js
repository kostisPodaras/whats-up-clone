import { combineReducers } from 'redux';

import { counterReducer } from 'models/counter';
import { roomsReducer } from 'models/rooms';

const rootReducer = combineReducers({
  counter: counterReducer,
  rooms: roomsReducer,
});

export default rootReducer;
