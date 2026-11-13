
function OpportunityCard({ opportunity, isSaved, onToggleSave }) {
    const formattedDate = new Date(
        `${opportunity.date}T00:00:00`
    ).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })

    const isFull = opportunity.availableSeats === 0

    return (
        <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E8EBEF] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[#E8EBEF] px-5 py-4">

                <span className="rounded-full bg-[#F3F5F7] px-3 py-1 text-xs font-semibold text-[#52677D]">
                    {opportunity.category}
                </span>

                {opportunity.featured && (
                    <span className="text-xs font-semibold text-[#BBA47E]">
                        ★ Featured
                    </span>
                )}

            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-5">

                <h3 className="text-lg font-bold leading-snug text-[#34495E]">
                    {opportunity.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#788797]">
                    {opportunity.description}
                </p>

                {/* Opportunity Details */}
                <div className="mt-5 space-y-3 border-t border-[#E8EBEF] pt-4">

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-[#8995A1]">Location</span>
                        <span className="font-medium text-[#52677D]">
                            {opportunity.city}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-[#8995A1]">Date</span>
                        <span className="font-medium text-[#52677D]">
                            {formattedDate}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-[#8995A1]">Available seats</span>
                        <span className={`font-semibold ${isFull ? "text-red-500" : "text-[#52677D]"}`}>
                            {isFull
                                ? "Fully Booked"
                                : `${opportunity.availableSeats} seats`}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-[#8995A1]">Price</span>
                        <span className="font-bold text-[#52677D]">
                            {opportunity.price === 0
                                ? "Free"
                                : `${opportunity.price.toLocaleString("en-US")} RWF`}
                        </span>
                    </div>

                </div>


                {/* Save Button */}
                <button
                    type="button"
                    onClick={() => onToggleSave(opportunity.id)}
                    aria-pressed={isSaved}
                    className={`mt-6 w-full rounded-md border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${isSaved
                            ? "border-[#52677D] bg-[#52677D] text-white hover:bg-[#405469]"
                            : "border-[#D5DDE5] bg-white text-[#52677D] hover:border-[#52677D] hover:bg-[#52677D] hover:text-white"
                        }`}
                >
                    <span className="mr-2 text-base">
                        {isSaved ? "♥" : "♡"}
                    </span>
                    {isSaved ? "Saved" : "Save Opportunity"}
                </button>


            </div>

        </article>
    )
}

export default OpportunityCard

