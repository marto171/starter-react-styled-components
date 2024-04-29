import axios from 'axios';
import {BASE_URL} from '../utils/constants.js';

const instance = axios.create({
    baseURL: BASE_URL,
    validateStatus: () => true
});

export default instance;