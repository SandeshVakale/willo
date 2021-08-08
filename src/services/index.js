import axios from 'axios';

import {Config} from '../config';

export const WAxios = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});
