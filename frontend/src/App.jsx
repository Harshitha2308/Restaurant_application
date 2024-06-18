import React from 'react'
import "./App.css";
import { BrowserRouter as Router ,Routes,Route  } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Success from './pages/Success.jsx';
import NotFound from "./pages/NotFound";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Toaster/>
  </Router>
  );
};

export default App;