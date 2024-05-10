import axios from '../utils/axios';

const getReminderByUser = axios.get('/reminder/:userId');

export { getReminderByUser };
