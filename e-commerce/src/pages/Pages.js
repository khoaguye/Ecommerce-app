import React from 'react'
import Product from './Product'
import Home from './Home'
import About from './About'
import {Routes, Route} from 'react-router-dom'

export default function Pages() {
  return (
      <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/Product" element={ <Product/>}/>
            <Route path="/About" element={<About/>}/>
  
    </Routes>
  );
}
