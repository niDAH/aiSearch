import * as actionTypes from './actionTypes';

export const companyDetailSet = (result) => ({
    result,
    type: actionTypes.COMPANY_DETAIL_SET,
});

export const companyFailure = (error) => ({
    error,
    type: actionTypes.COMPANY_FAILURE,
});

export const companyRequest = (companyId) => ({
    companyId,
    type: actionTypes.COMPANY_REQUEST,
});

export const companySuccess = (result) => ({
    result,
    type: actionTypes.COMPANY_SUCCESS,
});

export const searchFailure = (error) => ({
    error,
    type: actionTypes.SEARCH_FAILURE,
});

export const searchRequest = (searchTerm) => ({
    searchTerm,
    type: actionTypes.SEARCH_REQUEST,
});

export const searchSuccess = (results) =>
({
    results,
    type: actionTypes.SEARCH_SUCCESS,
});

export const tradingPartnerFailure = (error) => ({
    error,
    type: actionTypes.TRADING_PARTNER_FAILURE,
});

export const tradingPartnerRequest = (companyId) => ({
    companyId,
    type: actionTypes.TRADING_PARTNER_REQUEST,
});

export const tradingPartnerSuccess = (result) => ({
    result,
    type: actionTypes.TRADING_PARTNER_SUCCESS,
});
