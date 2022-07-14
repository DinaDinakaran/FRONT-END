import React from 'react'
import {BrowserRouter as Router , Route,Routes} from  "react-router-dom"
import Interface from './compoent/userinterface/interface'
import Flipkart from './compoent/flipkart/Flipkart'
import Snapdeal from './compoent/snapdeal/Snapdeal'
import Amazon from './compoent/amazon/Amazon'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Interface/>}/>
        <Route path='/flipkart' element={<Flipkart/>}/>
        <Route path='/snapdeal' element={<Snapdeal/>}/>
        <Route path='/amazon' element={<Amazon/>}/>
      </Routes>
    </Router>
  )
}
