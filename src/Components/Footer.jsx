
function Footer({ onNavigate }) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-[#E3E8ED] bg-white">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <button
                            type="button"
                            onClick={() => onNavigate("home")}
                            className="text-2xl font-bold tracking-[0.08em] text-[#52677D]"
                        >
                            IMBERE<span className="text-[#BBA47E]">.</span>
                        </button>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#788797]">
                            Discover opportunities, develop your potential,
                            and connect with possibilities that move you forward.
                            Your future begins here.
                        </p>

                        <p className="mt-5 text-sm font-medium text-[#52677D]">
                            Discover. Develop. Connect.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#52677D]">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => onNavigate("home")}
                                    className="text-sm text-[#788797] transition-colors hover:text-[#52677D]"
                                >
                                    Home
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    onClick={() => onNavigate("about")}
                                    className="text-sm text-[#788797] transition-colors hover:text-[#52677D]"
                                >
                                    About Us
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    onClick={() => onNavigate("opportunities")}
                                    className="text-sm text-[#788797] transition-colors hover:text-[#52677D]"
                                >
                                    Opportunities
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#52677D]">
                            Get Involved
                        </h3>

                        <p className="mb-5 text-sm leading-6 text-[#788797]">
                            Have an opportunity to share? Help others discover
                            new possibilities.
                        </p>

                        <button
                            type="button"
                            onClick={() => onNavigate("add")}
                            className="rounded-md bg-[#52677D] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#405469] hover:shadow-md"
                        >
                            + Add Opportunity
                        </button>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E8EBEF] pt-7 text-center sm:flex-row sm:text-left">

                    <p className="text-xs text-[#8995A1]">
                        © {currentYear} IMBERE. All rights reserved.
                    </p>

                    <p className="text-xs text-[#8995A1]">
                        Built to inspire growth and opportunity.
                    </p>

                </div>
            </div>
        </footer>
    )
}

export default Footer
