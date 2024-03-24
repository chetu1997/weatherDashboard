import React, { useState } from 'react';
import './SearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search city" />
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    );
};

export default SearchForm;
