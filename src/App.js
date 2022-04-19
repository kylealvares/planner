import './App.css';
import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import About from './pages/About';
import Header from './components/Header';
import Shell from './components/Shell';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Header />
      <Shell />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
