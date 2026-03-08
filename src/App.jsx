import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import ScrollProgressBar from './components/UI/ScrollProgressBar'
import ScrollToTop from './components/UI/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ShopPage from './pages/ShopPage'
import BuildPage from './pages/BuildPage'
import AuthPage from './pages/AuthPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-brand-bg text-brand-text font-inter antialiased overflow-x-hidden transition-colors duration-300">

        <ScrollProgressBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>


        <footer className="py-12 border-t border-brand-border text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-brand-muted font-bold">
            © 2026 LASWELL // ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </Router>
  )
}

export default App
