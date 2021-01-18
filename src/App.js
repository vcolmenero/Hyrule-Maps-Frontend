/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { locations } from './locations';
import { fetchMe } from './fetching'
import './App.css';
import {render} from 'react';
import userEvent from '@testing-library/user-event';


const locationData = {
  castleTown: {
    name: "Castle Town",
    hidden: true,
    image: "castleTown.jpg"
  },
  mountain: {
    name: "Mountain",
    hidden: true,
    image: "mountain.jpg"
  },
  tree: {
    name: "Tree",
    hidden: true,
    image: "tree.jpg"
  },
  field: {
    name: "Field",
    hidden: true,
    image: "field.jpg"
  },
  gerudo: {
    name: "Gerudo",
    hidden: true,
    image: "gerudo.jpg"
  },
  castle: {
    name: "Castle",
    hidden: true,
    image: "castle.jpg"
  },
  kakariko: {
    name: "Kakariko",
    hidden: true,
    image: "kakariko.jpg"
  },
  kokiri: {
    name: "Kokiri",
    hidden: true,
    image: "kokiri.jpg"
  },
  lake: {
    name: "Lake",
    hidden: true,
    image: "lake.jpg"
  },
  ranch: {
    name: "Ranch",
    hidden: true,
    image: "ranch.jpg"
  },
  domain: {
    name: "Domain",
    hidden: true,
    image: "domain.jpg"
  }
};


const App = () => {
  const [locations, setlocations] = useState(locationData); 
  const [currentLocationId, setCurrentLocationId] = useState(""); 

  
  const mapImages = Object.entries(locations).map(([id, location]) => (
    <img
      key={id}
      id={id}
      src={location.image}
      alt="Hyrule map"
      className={`map-item ${location.name}`}
    />
  ));

  
  const toggleCurrentLocationId = (id) => {
    const locationId = currentLocationId === id ? "" : id; 
    setCurrentLocationId(locationId);
  };

  
  const listLocations = Object.entries(locations).map(([id, location]) => (
    <p key={id} onClick={() => toggleCurrentLocationId(id)}>
      {location.name}
    </p>
  ));

  return (
    <div className="App">
      <div className="main">
        <div className="left-section">
          <div className="map-container">{mapImages}</div>
          <div className="info-container">
            Current Location:
            {currentLocationId !== "" &&
              JSON.stringify(locations[currentLocationId])}
          </div>
        </div>
        <div className="right-section">
          <div className="location-title">Locations:</div>
          {listLocations}
        </div>
      </div>
      <img src="hyrule" class="hyrule" alt="Hyrule map"></img>
    </div>
  );
};

export default App;