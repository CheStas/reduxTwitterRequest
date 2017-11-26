export const FETCH_TWITTERS = 'FETCH_TWITTERS';
export const FETCH_MORE_TWITTERS = 'FETCH_MORE_TWITTERS';

export function fetchTwitters(query) {
    return {
        type: FETCH_TWITTERS,
        query
    }
}

export function fetchMoreTwitters(url) {
    return {
        type: FETCH_MORE_TWITTERS,
        url
    }
}