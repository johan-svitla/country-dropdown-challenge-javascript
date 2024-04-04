import React, { useState, useEffect } from "react";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Your code to fetch data and handle search functionality goes here

  return (
    <div>
      <input
        type="text"
        placeholder="Search Country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select>
        <option value="">Select Country</option>
        {/* Display filtered countries here */}
      </select>
    </div>
  );
};

export default CountryDropdown;
