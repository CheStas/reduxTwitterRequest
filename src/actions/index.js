import axios from 'axios';

export const FETCH_TWITTERS = 'FETCH_TWITTERS';

export function fetchTwitters(person) {
    const url = `https://api.twitter.com/1.1/search/tweets.json?${person}`;
    const request = axios.get(url, { crossdomain: true });

    return {
        type: FETCH_TWITTERS,
        payload: request
    }
}