import { setRooms } from './actions';

const initialState = [];

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case setRooms.type:
      return action.payload;

    default:
      return state;
  }
};

export default roomsReducer;
