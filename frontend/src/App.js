import './styles/index.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import UserInput from './pages/user-input';
import UserSearch from './pages/user-search';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 App">
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-input" element={<UserInput />} />
        <Route path="/user-search" element={<UserSearch />} />
      </Routes>
    </div>
  );
}

export default App;
