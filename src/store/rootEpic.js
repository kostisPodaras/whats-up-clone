import { combineEpics } from 'redux-observable';

import { counterEpic } from 'models/counter';
import { roomsEpic } from 'models/rooms';

const rootEpic = combineEpics(counterEpic, roomsEpic);

export default rootEpic;
