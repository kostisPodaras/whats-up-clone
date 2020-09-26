import { map, pluck } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
// import db from '../../firebase';

import { getRooms, setRooms } from './actions';

const getRoomstEpic = (action$) =>
  action$.pipe(ofType(getRooms.type), pluck('payload'), map(setRooms));

const roomsEpic = combineEpics(getRoomstEpic);

export default roomsEpic;

// try and get data from db inside the epic and not from the HOC

// const getRoomstEpic = (action$) =>
//   action$.pipe(
//     ofType(getRooms.type),
//     map(() => {
//       db.collection('rooms').onSnapshot((snapshot) => {
//         const rooms = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }));
//         console.log(rooms);
//         return rooms;
//       });
//     }),
//     tap(console.log),
//     map(setRooms),
//   );
