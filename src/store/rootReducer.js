import { combineReducers } from 'redux';

import { roomsReducer } from 'models/rooms';

const rootReducer = combineReducers({
  rooms: roomsReducer,
});

export default rootReducer;
