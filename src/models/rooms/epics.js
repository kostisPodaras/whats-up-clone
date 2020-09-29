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

// Kostis way when sign in is implemented. TODO
// const getRoomstEpic = (action$, state$) => state$.pipe(
//   dinstinct(),
//   pairwise(),
//   filter(([oldState, newState]) => userToken(oldState) !== userToken(newState) && userToken(newState)),

//     //   map(() => {
//     //   db.collection('rooms').onSnapshot((snapshot) => {
//     //     const rooms = snapshot.docs.map((doc) => ({
//     //       id: doc.id,
//     //       data: doc.data(),
//     //     }));
//     //     console.log('rooms', rooms);
//     //     map(setRooms);
//     //   });
//     // }),
//     // // map(setRooms),
//   );
// );

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

// const getRoomstEpic = (action$) =>
//   action$.pipe(
//     ofType(getRooms.type),
//     map(() =>
//       db.collection('rooms').onSnapshot((snapshot) =>
//         setRooms(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           })),
//         ),
//       ),
//     ),
//   );

const roomsEpic = combineEpics(getRoomstEpic);

export default roomsEpic;
