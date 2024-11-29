import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddBlog from './AddBlog';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', gap: '10px', padding: '10px', background: '#f4f4f4' }}>
          <Link to="/home" className="nav">Home</Link>
          <Link to="/add-blog" className="nav">Add Blog</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="*" element={<Home />} /> {/* Redirect to Home */}
      </Routes>
    </Router>
  );
}

export default App;
