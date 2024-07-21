import React from 'react'

//importinc react router libraries
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//importing pages
import HomepageView from './Pages/Homepage/HomepageView.jsx';
import LayoutView from './Components/Layout/LayoutView.jsx';
import LogIn from './Pages/LogIn/logIn.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route element={<LayoutView />}>
          <Route path="/" element={<HomepageView />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

