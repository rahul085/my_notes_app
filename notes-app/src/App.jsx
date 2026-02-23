import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Archive from './pages/archive/Archive';
import Bin from './pages/bin/Bin';
import Bookmark from './pages/important/Bookmark';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
      <Route path="/bin" element={<Bin/>}/>
      <Route path='/important' element={<Bookmark/>}/>
    </Routes>
  )
}

export default App