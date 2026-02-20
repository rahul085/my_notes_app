import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Archive from './pages/archive/Archive';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
    </Routes>
  )
}

export default App