import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TWITTERS, FETCH_MORE_TWITTERS } from '../actions'
export const TWITERS_FETCHED = 'TWITERS_FETCHED';
export const TWITERS_FETCHED_FAILED = 'TWITERS_FETCHED_FAILED';
export const MORE_TWITTERS_FETCHED = 'MORE_TWITTERS_FETCHED';

function getTwitters(query) {
    const url = `/api/twitter/q=${query}&result_type=recent&count=10`;
    return axios
        .get(url)
        .then((res) => {
            return JSON.parse(res.data);
        });
}

function* callGetTwitters(actions) {
    try {
        const result = yield call(getTwitters, actions.query);
        yield put({ type: TWITERS_FETCHED, twitters: result.statuses, url: result.search_metadata.next_results });
    } catch (error) {
        yield put({ type: TWITERS_FETCHED_FAILED, message: error.message });
    }
}

function* getTwittersSaga() {
    yield* takeEvery(FETCH_TWITTERS, callGetTwitters);
}

function getMoreTwitters(query) {
    query = query.substring(1, query.length);
    const url = `/api/twitter/${query}`;
    return axios
        .get(url)
        .then((res) => {
            return JSON.parse(res.data);
        });
}

function* callGetMoreTwitters(actions) {
    try {
        const result = yield call(getMoreTwitters, actions.url);
        yield put({ type: MORE_TWITTERS_FETCHED, twitters: result.statuses, url: result.search_metadata.next_results });
    } catch (error) {
        yield put({ type: TWITERS_FETCHED_FAILED, message: error.message });
    }
}

function* getMoreTwittersSaga() {
    yield* takeEvery(FETCH_MORE_TWITTERS, callGetMoreTwitters);
}

export default function* root() {
    yield [
        fork(getTwittersSaga),
        fork(getMoreTwittersSaga)
    ]
}
