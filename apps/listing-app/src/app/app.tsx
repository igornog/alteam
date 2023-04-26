import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/home'
import GeneralInfoForm from './views/generalInfo'
import CreateListingStart from './components/AtForm/ListingsForm/CreateListing/CreateListingStart'

export const App: React.FC = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<GeneralInfoForm />} />
      <Route path="/create-my-listing" element={<CreateListingStart />} />
    </Routes>
  )
}

export default App
