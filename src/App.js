import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TemperatureConverter />
      <Footer />
    </div>
  );
}

export default App;
