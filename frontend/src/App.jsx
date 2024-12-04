import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllEmployees from './pages/AllEmployees'
import Active from './pages/Active'
import Inactive from './pages/Inactive'
import SignUp from './pages/SignUp'

function App () {
  return (
    <div className='bg-black/90 text-white h-screen p-2 relative'>
      <Router>
        <Routes>
          {/* entry point */}
          <Route exact path='/' element={<Home />}>
            {/* with outlet -> other pages rendered only in right section of the homepage */}
            <Route index element={<AllEmployees />} />
            <Route path='/active' element={<Active />} />
            <Route path='/inactive' element={<Inactive />} />
          </Route>

          {/* Route to Sign up Page */}
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
