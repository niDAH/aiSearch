import axios from 'axios';
import {
    call,
    put,
    takeEvery,
} from 'redux-saga/effects';

import {
    companySuccess,
    searchSuccess,
    searchFailure,
    tradingPartnerSuccess,
} from '../actions/actionCreators';
import {
    COMPANY_REQUEST,
    SEARCH_REQUEST,
    TRADING_PARTNER_REQUEST,
} from '../actions/actionTypes';

const BASE_URL = 'https://api.altana.ai/atlas/v1/'

axios.defaults.headers.common['x-api-key'] = 'MTpJbnRlcnZpZXclMjAyMDIxLTA5LTIyOjE2MzIzNTk2NTU6NWNhMzViYjk.ZmEwZWI5OTdmYWJjYWFlZWJmY2YyNGYyN2FkMmQ5YzkwODQ4NWNiYg';

function* getCompanyDetailsAsync({ companyId }) {
    const { data } = yield call(axios.get, `${BASE_URL}company/id/${companyId}`);

    yield put(companySuccess(data));
}

function* getSearchResultsAsync({ searchTerm }) {
    const { data } = yield call(axios.get, `${BASE_URL}company/search/${searchTerm}`);

    yield put(searchSuccess({ data }));
}

function* getTradingPartnersAsync({ companyId }) {
    const { data } = yield call(axios.get, `${BASE_URL}company/id/${companyId}/trading-partners`);

    yield put(tradingPartnerSuccess({ data }));
}

export default function* watchSearch() {
    yield takeEvery(COMPANY_REQUEST, getCompanyDetailsAsync);
    yield takeEvery(SEARCH_REQUEST, getSearchResultsAsync);
    yield takeEvery(TRADING_PARTNER_REQUEST, getTradingPartnersAsync);
};
