import React from 'react'
import {Routes,Route} from 'react-router-dom'

import { Navigation,Footer } from './components'
import { Home,Milestones,About,Vision,Clubs,Office,Nss,Alumni,Teqip1,Teqip2,Teqip3 } from './pages'

import './App.css'

const App = () => {
  return (
    <div>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/milestones' element={<Milestones/>}/>
          <Route path='/about-institution' element={<About/>}/>
          <Route path='/vision' element={<Vision/>}/>
          <Route path='/office' element={<Office/>}/>
          <Route path='/teqip1' element={<Teqip1/>}/>
          <Route path='/teqip2' element={<Teqip2/>}/>
          <Route path='/teqip3' element={<Teqip3/>}/>
          <Route path='/clubs' element={<Clubs/>}/>
          <Route path='/nss' element={<Nss/>}/>
          <Route path='/alumni' element={<Alumni/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App