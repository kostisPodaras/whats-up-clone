import { ActionCreator } from 'core/utils';

const namespacedActionCreator = ActionCreator('//rooms');

const getRooms = namespacedActionCreator('getRooms');
const setRooms = namespacedActionCreator('setRooms');
const updateRooms = namespacedActionCreator('updateRooms');

export { getRooms, setRooms, updateRooms };
