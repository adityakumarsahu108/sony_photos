// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Main'; // Adjust the paths based on your actual file structure
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
