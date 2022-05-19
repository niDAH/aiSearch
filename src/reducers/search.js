import produce from 'immer';
import {
    COMPANY_DETAIL_SET,
    COMPANY_FAILURE,
    COMPANY_REQUEST,
    COMPANY_SUCCESS,

    SEARCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,

    TRADING_PARTNER_FAILURE,
    TRADING_PARTNER_REQUEST,
    TRADING_PARTNER_SUCCESS,
} from '../actions/actionTypes';

const defaultState = {
    companyDetails: {},
    companyId: null,
    error: null,
    isLoading: false,
    results: [],
    term: '',
    tradingPartners: [],
};

const search = produce((draft, action) => {
    switch (action.type) {
        case COMPANY_DETAIL_SET:
            return {
                ...draft,
                companyDetails: action.result,
            }
        case COMPANY_FAILURE:
            return draft;
        case COMPANY_REQUEST:
            return {
                ...draft,
                companyId: action.companyId,
            };
        case COMPANY_SUCCESS:
            return {
                ...draft,
                companyDetails: action.results,
            };
        case SEARCH_FAILURE:
            return draft;
        case SEARCH_REQUEST:
            return {
                ...draft,
                searchTerm: action.searchTerm,
                isLoading: true,
            };
        case SEARCH_SUCCESS:
            return {
                ...draft,
                results: action.results.data,
                isLoading: false,
            };
        case TRADING_PARTNER_FAILURE:
            return draft;
        case TRADING_PARTNER_REQUEST:
            return {
                ...draft,
                companyId: action.companyId,
            };
        case TRADING_PARTNER_SUCCESS:
            console.log('TRAIDING PARTNER SUCCESS', action.result.data.companies);
            return {
                ...draft,
                tradingPartners: action.result.data?.companies,
            };
        default:
            return draft;
    }
}, defaultState);

export default search;
