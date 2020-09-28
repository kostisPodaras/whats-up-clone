import { map, pluck } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

// import db from 'src/firebase'

import {
  getRooms,
  setRooms,
  //  updateRooms
} from './actions';

const getRoomstEpic = (action$) =>
  action$.pipe(ofType(getRooms.type), pluck('payload'), map(setRooms));

// try and get data from db inside the epic and not from the HOC

// const getRoomstEpic = (action$) =>
//   action$.pipe(
//     ofType(getRooms.type),
//     map(
//       async () =>
//         await db.collection('rooms').onSnapshot((snapshot) => {
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }));
//         }),
//     ),
//     map(setRooms),
//   );

const roomsEpic = combineEpics(getRoomstEpic);

export default roomsEpic;
