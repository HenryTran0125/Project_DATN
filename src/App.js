import React from 'react';
import MongoDataComponent from './components/Setpoint';
import './App.css'; // Import your CSS file for styling
import MyComponent from './components/SavingData';
//import Snowflake from './components/Snowflake';
import DisplayData from './components/DisplayData';
import SavingData from './components/SavingData';
import AutoFill from './components/AutoFill';

const App = () => {
  const numberOfSnowflakes = 50;

  return (
    <div className="app-container">
      {/* Container 1 */}
      <div className="container-left">
        <h1>Data From MongoDB</h1>
        <MongoDataComponent />
        <SavingData />

      </div>

      {/* Container 2 */}
      <div className="container-right">
        <DisplayData />
        <AutoFill />
      </div>
    </div>
  );
};

export default App;
        //{[...Array(numberOfSnowflakes)].map((_, index) => (<Snowflake key={index} />))}
