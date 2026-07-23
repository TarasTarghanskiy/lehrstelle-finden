import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Why from './components/Why'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Legal from './components/Legal'

function currentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash === 'impressum' || hash === 'datenschutz') return hash
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(currentRoute())

  useEffect(() => {
    function onHashChange() {
      const next = currentRoute()
      setRoute(next)
      // Scroll to top only when navigating to a legal page.
      if (next !== 'home') window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === 'impressum' || route === 'datenschutz') {
    return (
      <>
        <Nav />
        <Legal page={route} />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Why />
        <Pricing />
        <About />
        <Contact />
      </main>
    </>
  )
}
