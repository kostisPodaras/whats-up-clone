import { tap, map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { getRooms, setRooms } from './actions';

const getRoomstEpic = (action$) =>
  action$.pipe(
    ofType(getRooms.type),
    tap((el) => console.log(el)),
    map((stream) => setRooms(stream)),
  );

const roomsEpic = combineEpics(getRoomstEpic);

export default roomsEpic;
