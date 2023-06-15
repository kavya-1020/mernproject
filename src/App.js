// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Rescue</h1>
        <p className="App-subtitle">Helping to Reduce Food Waste</p>
      </header>
      <main>
        <div className="container">
          <h2>Available Food Items</h2>
          {/* Food items list */}
          <ul className="food-list">
            <li>
              <img
                src="food1.jpg"
                alt="Food 1"
                className="food-image"
              />
              <h3>Food Item 1</h3>
              <p>Description of the food item.</p>
              <button className="btn-rescue">Rescue</button>
            </li>
            <li>
              <img
                src="food2.jpg"
                alt="Food 2"
                className="food-image"
              />
              <h3>Food Item 2</h3>
              <p>Description of the food item.</p>
              <button className="btn-rescue">Rescue</button>
            </li>
            <li>
              <img
                src="food3.jpg"
                alt="Food 3"
                className="food-image"
              />
              <h3>Food Item 3</h3>
              <p>Description of the food item.</p>
              <button className="btn-rescue">Rescue</button>
            </li>
          </ul>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Food Rescue. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
