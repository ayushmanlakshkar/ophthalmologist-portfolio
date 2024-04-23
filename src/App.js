import './App.css';
import AboutMe from './components/HomePage/AboutMe';
import ContactUs from './components/HomePage/ContactUs';
import Treatments from './components/HomePage/Treatments';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './components/Experience/Experience';
import Awards from './components/Awards and Honours/Awards';
import Publications from './components/Publications/Publications';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/AwardsAndHonours" element={<Awards/>} />
          <Route path="/Publications" element={<Publications/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
