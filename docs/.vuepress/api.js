import axios from 'axios';

const client = axios.create({
    baseURL: 'https://convenient.pukogames.com/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const search = (payload) => {
  payload.country = 'FR';
  return client.post('/user/', payload);
}
