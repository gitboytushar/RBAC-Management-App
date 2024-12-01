import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import IncompletedTasks from './pages/IncompletedTasks'

function App () {
  return (
    <div className='bg-black/90 text-white h-screen p-2'>
      <Router>
        <Routes>
          {/* initially the app opens at Homepage */}
          <Route exact path='/' element={<Home />}>
            {/* with outlet -> other pages rendered only in right section of the homepage for tasks */}
            <Route index element={<AllTasks />} />
            <Route path='/importantTasks' element={<ImportantTasks />} />
            <Route path='/completedTasks' element={<CompletedTasks />} />
            <Route path='/incompletedTasks' element={<IncompletedTasks />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
