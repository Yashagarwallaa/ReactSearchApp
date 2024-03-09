import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers');
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase()),
    console.log("hi..name")
  );

  return (
    <div className="App">
      <h1>React App</h1>
      <input
        type="text"
        placeholder="Search by beer name.."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="beer-container">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="beer-card">
            <div className="beer-heading" > <h2>{beer.name}</h2><br></br>
            <p>{beer.tagline}</p><br></br>
            </div>
           
            <img src={beer.image_url} alt={beer.name} />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;