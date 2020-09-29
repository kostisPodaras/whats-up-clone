import { ActionCreator } from 'core/utils';

const namespacedActionCreator = ActionCreator('//counter');

const getRooms = namespacedActionCreator('getRooms');
const setRooms = namespacedActionCreator('setRooms');
const updateRooms = namespacedActionCreator('updateRooms');

export { getRooms, setRooms, updateRooms };
