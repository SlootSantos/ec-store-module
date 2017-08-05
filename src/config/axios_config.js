import axios from 'axios';
import { STORE_ID } from './store_config';

export default axios.defaults.headers.common['store-id'] = STORE_ID;
