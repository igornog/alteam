import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/home'
import Form from './views/form'

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
      <Route path="/form" element={<Form />} />
    </Routes>
  )
}

export default App

