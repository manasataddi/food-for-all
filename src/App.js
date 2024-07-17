import React from 'react'

//importinc react router libraries
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//importing pages
import HomepageView from './Pages/Homepage/HomepageView.jsx';
import LayoutView from './Components/Layout/LayoutView.jsx';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route path="/home" element={<HomepageView />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

