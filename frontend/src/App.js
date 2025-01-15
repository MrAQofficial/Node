import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>products</h1>}  />
      <Route path="/add" element={<h1>Add product</h1>}  />
      <Route path="/update" element={<h1>Update product</h1>}  />
      <Route path="/logOut" element={<h1>Logout</h1>}  />
      <Route path="/profile" element={<h1>Profile</h1>}  />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
