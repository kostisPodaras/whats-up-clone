import { map, pluck } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

// import db from 'src/firebase';

import {
  getRooms,
  setRooms,
  //  updateRooms
} from './actions';

const getRoomstEpic = (action$) =>
  action$.pipe(ofType(getRooms.type), pluck('payload'), map(setRooms));

// const getRoomstEpic = (action$) =>
//   action$.pipe(
//     ofType(getRooms.type),
//     tap((stream) => console.log('stream is', stream)),
//     map(() => {
//       db.collection('rooms').onSnapshot((snapshot) => {
//         const rooms = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }));
//         console.log('rooms', rooms);
//         map(setRooms);
//       });
//     }),
//     // map(setRooms),
//   );

const roomsEpic = combineEpics(getRoomstEpic);

export default roomsEpic;
