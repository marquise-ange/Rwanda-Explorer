
import { useState } from "react"
import opportunities from "../data/Dataopportunities"
import OpportunityCard from "./OpportunityCard"

function Opportunities() {
    // Saved opportunities
    const [savedIds, setSavedIds] = useState([])

    // Search and category filter
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    // Save and unsave opportunities
    const handleToggleSave = (id) => {
        setSavedIds((previousIds) =>
            previousIds.includes(id)
                ? previousIds.filter((savedId) => savedId !== id)
                : [...previousIds, id]
        )
    }

    // Search and filter opportunities
    const filteredOpportunities = opportunities.filter((opportunity) => {
        const search = searchTerm.trim().toLowerCase()

        const matchesSearch =
            opportunity.title.toLowerCase().includes(search) ||
            opportunity.city.toLowerCase().includes(search)

        const matchesCategory =
            selectedCategory === "All" ||
            opportunity.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    // Reset search and category
    const handleReset = () => {
        setSearchTerm("")
        setSelectedCategory("All")
    }

    return (
        <section
            id="opportunities"
            className="bg-[#F3F5F7] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">

                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#BBA47E] sm:text-sm">
                            EXPLORE POSSIBILITIES
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#34495E] sm:text-4xl lg:text-5xl">
                            Explore Opportunities
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#788797] sm:text-base">
                            Discover workshops, courses, career events, and
                            community experiences that help you move forward.
                        </p>
                    </div>

                    <div className="text-sm font-medium text-[#71869A]">
                        <p>{opportunities.length} Opportunities Available</p>
                        <p className="mt-1">{savedIds.length} Saved</p>
                    </div>

                </div>

                {/* Search and Category Filters */}
                <div className="mb-8 rounded-xl border border-[#E8EBEF] bg-white p-4 sm:p-6">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {/* Search Input */}
                        <div>
                            <label
                                htmlFor="opportunity-search"
                                className="mb-2 block text-sm font-semibold text-[#52677D]"
                            >
                                Search Opportunities
                            </label>

                            <input
                                id="opportunity-search"
                                type="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by title or city..."
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm text-[#52677D] outline-none transition focus:border-[#52677D] focus:ring-2 focus:ring-[#52677D]/10"
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label
                                htmlFor="category-filter"
                                className="mb-2 block text-sm font-semibold text-[#52677D]"
                            >
                                Filter by Category
                            </label>

                            <select
                                id="category-filter"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm text-[#52677D] outline-none transition focus:border-[#52677D]"
                            >
                                <option value="All">All Categories</option>
                                <option value="Workshop">Workshop</option>
                                <option value="Course">Course</option>
                                <option value="Career">Career</option>
                                <option value="Community">Community</option>
                            </select>
                        </div>

                    </div>

                    {/* Results and Reset */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#E8EBEF] pt-4">

                        <p className="text-sm text-[#8995A1]">
                            Showing{" "}
                            <span className="font-semibold text-[#52677D]">
                                {filteredOpportunities.length}
                            </span>{" "}
                            of {opportunities.length} opportunities
                        </p>

                        <button
                            type="button"
                            onClick={handleReset}
                            className="text-sm font-semibold text-[#52677D] transition-colors hover:text-[#BBA47E]"
                        >
                            Reset Filters
                        </button>

                    </div>

                </div>

                {/* Opportunity Cards */}
                {filteredOpportunities.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                        {filteredOpportunities.map((opportunity) => (
                            <OpportunityCard
                                key={opportunity.id}
                                opportunity={opportunity}
                                isSaved={savedIds.includes(opportunity.id)}
                                onToggleSave={handleToggleSave}
                            />
                        ))}

                    </div>
                ) : (
                    /* Empty State */
                    <div className="rounded-xl border border-[#E8EBEF] bg-white px-6 py-16 text-center">

                        <div className="mb-4 text-4xl">🔎</div>

                        <h3 className="text-xl font-bold text-[#52677D]">
                            No Opportunities Found
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#8995A1]">
                            We couldn't find any opportunities matching your search.
                            Try another keyword or category.
                        </p>

                        <button
                            type="button"
                            onClick={handleReset}
                            className="mt-6 rounded-md bg-[#52677D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#405469]"
                        >
                            Clear Filters
                        </button>

                    </div>
                )}

            </div>
        </section>
    )
}

export default Opportunities
