import { TWITERS_FETCHED, TWITERS_FETCHED_FAILED, MORE_TWITTERS_FETCHED } from '../sagas/sagas';
const defaultState = {
    collections: []
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case TWITERS_FETCHED:
            return { collections: action.twitters, nextPage: action.url };
        case MORE_TWITTERS_FETCHED:
            return { collections: state.collections.concat(action.twitters), nextPage: action.url }
        case TWITERS_FETCHED_FAILED:
            return { error: action.message }
    }
    return state;
}