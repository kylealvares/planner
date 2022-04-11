import './App.css';
import Home from './pages/home/Home';
import About from './pages/About';
import Header from './components/Header';
import Shell from './components/Shell';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

  const [selectedTab, setSelectedTab] = useState('/');

  return (
    <div className="App">
      <Header />
      <Shell selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
