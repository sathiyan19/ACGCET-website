import React from 'react'
import {Routes,Route} from 'react-router-dom'

import { Navigation,Footer } from './components'
import { Home,Milestones,About,Vision,Office } from './pages'

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
          <Route path='/sathiyan' element={<Milestones/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App