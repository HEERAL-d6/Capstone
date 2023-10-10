// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myapplication from './pages/Myapplication';
import Profile from './pages/Profile';
import { useState } from 'react';

function App1() {
const [number, setNumber]=useState(1)


  return (
    <>


      <div style={{ display: "flex" }}>

        <Router>
          <Routes>
            <Route path="/" element={<Home number={number} setNumber={setNumber} />} />
            <Route path="/myapp" element={<Myapplication number={number} setNumber={setNumber} />} />
            <Route path="/myprofile" element={<Profile number={number} setNumber={setNumber} />} />
          </Routes>
        </Router>

      </div>

    </>


  );
}

export default App1;
