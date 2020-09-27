import { Action } from 'core/utils';

const namespaceAction = Action('//counter');

const getRooms = namespaceAction('getRooms');
const setRooms = namespaceAction('setRooms');
const updateRooms = namespaceAction('updateRooms');

export { getRooms, setRooms, updateRooms };
