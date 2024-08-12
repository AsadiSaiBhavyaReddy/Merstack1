// GitHubUserDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHubCard from './GitHubCard'; // Update the import path based on your project structure

const GitHubUserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users?per_page=100&since=${Math.floor(
            Math.random() * 10000
          )}`
        ); // Fetch up to 100 users
        setUserDetails(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${searchTerm}`, {
        headers: {
          Authorization: `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`, // Replace YOUR_ACCESS_TOKEN with a valid GitHub token
        },
      });
      setUserDetails([response.data]); // Display only the searched user
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(new Error('User not found.'));
      } else {
        setError(error);
      }
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <label htmlFor="search" style={{ fontSize: '1.2em' }}>Search GitHub User: </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: '1.2em', marginLeft: '10px', padding: '5px' }}
        />
        <button
          onClick={handleSearch}
          style={{ fontSize: '1.2em', marginLeft: '10px', padding: '8px', backgroundColor: 'green', color: 'black', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>
      {error && <p>Error: {error.message}</p>}
      {userDetails.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {userDetails.map((user) => (
            <GitHubCard
              key={user.id}
              name={user.login}
              id={user.id}
              email={user.email}
              avatarUrl={user.avatar_url}
              color="white" // Use the color name 'red'
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GitHubUserDetails;
