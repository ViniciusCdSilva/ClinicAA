import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profissional from './pages/Profissional';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Profissional" element={<Profissional />} />
      </Routes>
    </Router>
  );
}

export default App;