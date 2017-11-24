import { FETCH_TWITTERS } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TWITTERS:
            const twitters = JSON.parse(action.payload.data)
            console.log(twitters.statuses);
            return (twitters.statuses);
    }
    return state;
}