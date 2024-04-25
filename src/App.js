import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './components/Experience/Experience';
import Awards from './components/Awards and Honours/Awards';
import Publications from './components/Publications/Publications';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/AwardsAndHonours" element={<Awards/>} />
          <Route path="/Publications" element={<Publications/>} />
        </Routes>
        <ContactUs/>
      </Router>
    </div>
  );
}

export default App;
