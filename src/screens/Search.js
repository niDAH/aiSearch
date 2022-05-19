import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const SearchBoxContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

const SearchForm = styled.form`
        width: 500px;
        height: auto;
        border: 1px solid darkgray;
        border-radius: 5px;
        margin-top: 50px;
        padding: 20px;
        background-color: #bebebe;
    `;

export default function Search() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const onChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (searchTerm.length) {
            navigate(`/results/${searchTerm}`);
        }
    };

    return (
        <main className="form-search w-100 m-auto">
            <h5>Search by Company</h5>

            <SearchBoxContainer>
                <SearchForm
                    onSubmit={onSubmit}
                >
                    <Form.Group
                        className="mb-3"
                        data-test-id="searchInput"
                    >
                        <Form.Control
                            onChange={onChange}
                            placeholder="Company..."
                            type="text"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </SearchForm>
            </SearchBoxContainer>
        </main>
    );
}
