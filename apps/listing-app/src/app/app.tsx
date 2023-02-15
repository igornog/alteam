import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/home'
import GeneralInfoForm from './views/generalInfo'
import DrawerListing from './components/AtDrawer/drawers/DrawerListing/DrawerListing'
import DrawerCreateListing from './components/AtDrawer/drawers/DrawerCreateListing/DrawerCreateListing'

export const Navigation: NavigationProps[] = []

export interface NavigationProps {
  link: string
  element: React.ReactNode
  icon?: React.ReactNode
  name?: string
}

export const App: React.FunctionComponent = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<GeneralInfoForm />} />
      <Route path="/create-my-listing" element={<DrawerCreateListing />} />
    </Routes>
  )
}

export default App

