import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Shop from './views/Shop';
import Blog from './views/Blog';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

