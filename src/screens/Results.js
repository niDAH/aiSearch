import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { searchRequest } from '../actions/actionCreators';

const CenteredContainer = styled.div`
        align-items: center;
        display: flex;
        justify-content: center;
    `;
const LoadingDiv = styled.div`
        background-color: #bebebe;
        border: 1px solid darkgray;
        border-radius: 5px;
        height: auto;
        margin-top: 50px;
        padding: 20px;
        width: 500px;
    `;
const ResultsDiv = styled.div`
        background-color: #bebebe;
        border: 1px solid darkgray;
        border-radius: 5px;
        height: auto;
        margin-top: 50px;
        padding: 20px;
        width: 90%;
    `;

export default function Results() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.search.isLoading);
    const results = useSelector((state) => state.search.results);

    const { searchTerm } = useParams();

    useEffect(() => {
        if (results?.length === 0 && searchTerm) {
            dispatch(searchRequest(searchTerm));
        }
    }, [dispatch, results, searchTerm]);

    return (
        <main>
            <h5>
                Results for: '{searchTerm}'
                {`(${(results?.page_num === 0 ? 1 : results?.page_num) * results?.page_size} of ${results?.num_results} shown)`}
            </h5>
            <p><Link to="/">New search</Link></p>

            {isLoading ? (
                <CenteredContainer>
                    <LoadingDiv>Loading...</LoadingDiv>
                </CenteredContainer>
            ) : (
                <CenteredContainer>
                    <ResultsDiv>
                        <ol>
                            {results?.companies?.map((result) => (
                                <li key={result.altana_canon_id}>
                                    <Link to={`/companyVisualization/${result.altana_canon_id}`} state={{ result: result }}>
                                        {result.company_name}
                                    </Link>
                                    <br/>
                                    {`(Total record: ${result.company_context.number_records}) Total suppliers (trading partners): ${result.company_context.trading_partners.length})`}
                                </li>
                            ))}
                        </ol>
                    </ResultsDiv>
                </CenteredContainer>
            )}
        </main>
    );
}
