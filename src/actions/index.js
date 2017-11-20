import axios from 'axios';

export const FETCH_TWITTERS = 'FETCH_TWITTERS';
const bearer_token = 'AAAAAAAAAAAAAAAAAAAAAAq13AAAAAAACiMObO2Ouy42H%2B00yg9F3rZVlmU%3DwFyg8xRTJbEmOp1fuS27UFWEFUQGf3oa0DKunPrpsUdNcoKmqu';

export function fetchTwitters(person) {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${person}`;
    const request = axios.get(url, {crossdomain: true, headers: { "Authorization": "Bearer " + bearer_token , "Access-Control-Allow-Origin": "*"}});

    return {
        type: FETCH_TWITTERS,
        payload: request
    }
}