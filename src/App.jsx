"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Destinations from "./components/Destinations"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <div id="home">
        <Hero />
      </div>
      <div id="destinations">
        <Destinations />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
