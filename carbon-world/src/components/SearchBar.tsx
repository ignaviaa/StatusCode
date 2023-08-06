import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className="max-w-md mx-auto">
            <div className="relative text-gray-600">
                <button type="submit" className="absolute left-0 top-0 mt-3 ml-4">
                    <FiSearch className="h-4 w-4" />
                </button>
                <input
                    type="search"
                    name="search"
                    placeholder="Search projects..."
                    className="bg-white h-10 pl-10 pr-5 rounded-full text-sm focus:outline-none"
                />
            </div>
        </div>
    );
};

export default SearchBar;
