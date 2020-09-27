import roomsEpic from './epics';
import roomsReducer from './reducer';
import { getRooms, setRooms } from './actions';
import { rooms } from './selectors';

export { getRooms, setRooms, rooms, roomsReducer, roomsEpic };
