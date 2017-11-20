import { FETCH_TWITTERS } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TWITTERS:
            console.log(action.payload);
            return action.payload;
    }
    return state;
}