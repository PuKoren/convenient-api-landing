import axios from 'axios';

const client = axios.create({
    baseURL: 'http://convenient.pukogames.com/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const search = payload => client.post('/user/', payload);
