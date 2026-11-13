
import { useState } from "react"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Opportunities from "./Components/Opportunities"
import AddOpportunity from "./Components/OpportunityForm"

import initialOpportunities from "./data/Dataopportunities"

function App() {
  // Shared opportunities data
  const [opportunities, setOpportunities] = useState(initialOpportunities)

  // Shared saved opportunities
  const [savedIds, setSavedIds] = useState([])

  // Save and unsave opportunities
  const handleToggleSave = (id) => {
    setSavedIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((savedId) => savedId !== id)
        : [...previousIds, id]
    )
  }

  // Add a new opportunity
  const handleAddOpportunity = (newOpportunity) => {
    setOpportunities((previousOpportunities) => [
      newOpportunity,
      ...previousOpportunities,
    ])
  }

  // Navigate between sections
  const handleNavigate = (section) => {
    const target = document.getElementById(section)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F5F7]">
      <Navbar onNavigate={handleNavigate} />

      <main>
        <Hero onNavigate={handleNavigate} />

        <About onNavigate={handleNavigate} />

        <Opportunities
          opportunities={opportunities}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
        />

        <AddOpportunity
          onAddOpportunity={handleAddOpportunity}
        />
      </main>
    </div>
  )
}

export default App
