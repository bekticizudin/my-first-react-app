import React from 'react';

interface CitySearchProps {
  handleCityFilter: (city: string) => void;
}

const SearchByCity: React.FC<CitySearchProps> = ({ handleCityFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search by City"
      onChange={(e) => handleCityFilter(e.target.value)}
    />
  );
};

export default SearchByCity;