import { tap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { getRooms } from './actions';

const getRoomstEpic = (action$) =>
  action$.pipe(ofType(getRooms.type), tap(console.log('h')));

const roomsEpic = combineEpics(getRoomstEpic);

export default roomsEpic;
