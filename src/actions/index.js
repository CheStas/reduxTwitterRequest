import axios from 'axios';

export const FETCH_TWITTERS = 'FETCH_TWITTERS';
const bearer_token = 'AAAAAAAAAAAAAAAAAAAAAAq13AAAAAAACiMObO2Ouy42H%2B00yg9F3rZVlmU%3DwFyg8xRTJbEmOp1fuS27UFWEFUQGf3oa0DKunPrpsUdNcoKmqu';

export function fetchTwitters(query) {
    const url = `/api/twitter/${query}`;
    const request = axios.get(url);
    return {
        type: FETCH_TWITTERS,
        payload: request
    }
}