
import opportunities from "../data/Dataopportunities"
import OpportunityCard from "./OpportunityCard"

function Opportunities() {
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

                    <p className="text-sm font-medium text-[#71869A]">
                        {opportunities.length} Opportunities Available
                    </p>

                </div>

                {/* Opportunity Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                    {opportunities.map((opportunity) => (
                        <OpportunityCard
                            key={opportunity.id}
                            opportunity={opportunity}
                            isSaved={false}
                            onToggleSave={() => { }}
                        />
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Opportunities
