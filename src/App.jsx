
import { useEffect, useState } from "react"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Opportunities from "./Components/Opportunities"
import AddOpportunity from "./Components/OpportunityForm"

import initialOpportunities from "./data/Dataopportunities"

function App() {
  // Shared opportunities data
  const [opportunities, setOpportunities] = useState([])

  // Shared saved opportunities
  const [savedIds, setSavedIds] = useState([])

  // Loading and error states
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [loadAttempt, setLoadAttempt] = useState(0)

  // Load local opportunity data
  useEffect(() => {
    setIsLoading(true)
    setError("")

    const loadingTimer = setTimeout(() => {
      try {
        if (!Array.isArray(initialOpportunities)) {
          throw new Error("Opportunity data could not be loaded.")
        }

        setOpportunities(initialOpportunities)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }, 600)

    return () => clearTimeout(loadingTimer)
  }, [loadAttempt])

  // Retry loading opportunities
  const handleRetry = () => {
    setLoadAttempt((previousAttempt) => previousAttempt + 1)
  }

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

        {isLoading ? (
          <section
            id="opportunities"
            className="px-6 py-24 text-center"
            aria-live="polite"
          >
            <div className="mx-auto max-w-xl">
              <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-[#D5DDE5] border-t-[#52677D]" />

              <h2 className="text-xl font-semibold text-[#52677D]">
                Loading opportunities...
              </h2>

              <p className="mt-2 text-sm text-[#788797]">
                Please wait while we prepare opportunities for you.
              </p>
            </div>
          </section>
        ) : error ? (
          <section
            id="opportunities"
            className="px-6 py-24 text-center"
            aria-live="assertive"
          >
            <div className="mx-auto max-w-xl rounded-xl border border-red-200 bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl" aria-hidden="true">
                !
              </div>

              <h2 className="text-xl font-semibold text-[#52677D]">
                Something went wrong
              </h2>

              <p className="mt-3 text-sm text-[#788797]">
                {error}
              </p>

              <button
                type="button"
                onClick={handleRetry}
                className="mt-6 rounded-md bg-[#52677D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#405469]"
              >
                Try Again
              </button>
            </div>
          </section>
        ) : (
          <Opportunities
            opportunities={opportunities}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />
        )}

        <AddOpportunity
          onAddOpportunity={handleAddOpportunity}
        />
      </main>
    </div>
  )
}

export default App
