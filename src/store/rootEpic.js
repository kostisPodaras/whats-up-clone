import { combineEpics } from 'redux-observable';

import { roomsEpic } from 'models/rooms';

const rootEpic = combineEpics(roomsEpic);

export default rootEpic;
