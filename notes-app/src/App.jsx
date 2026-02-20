import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Archive from './pages/archive/Archive';
import Bin from './pages/bin/Bin';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
      <Route path="/bin" element={<Bin/>}/>
    </Routes>
  )
}

export default App