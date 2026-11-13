
import { useState } from "react"

function Navbar({ onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const navigationLinks = [
        { label: "Home", section: "home" },
        { label: "About Us", section: "about" },
        { label: "Opportunities", section: "opportunities" },
    ]

    const handleNavigation = (section) => {
        onNavigate(section)
        setMenuOpen(false)
    }

    return (
        <nav
            aria-label="Main navigation"
            className="sticky top-0 z-50 w-full border-b border-[#E8EBEF] bg-white/95 backdrop-blur-md"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">

                {/* Logo */}
                <button
                    type="button"
                    onClick={() => handleNavigation("home")}
                    aria-label="IMBERE - Go to homepage"
                    className="shrink-0"
                >
                    <span className="text-2xl font-bold tracking-[0.08em] text-[#52677D]">
                        IMBERE<span className="text-[#BBA47E]">.</span>
                    </span>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navigationLinks.map((link) => (
                        <button
                            key={link.section}
                            type="button"
                            onClick={() => handleNavigation(link.section)}
                            className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#788797] transition-all duration-200 hover:border-[#BBA47E] hover:text-[#52677D]"
                        >
                            {link.label}
                        </button>
                    ))}

                    {/* Add Opportunity */}
                    <button
                        type="button"
                        onClick={() => handleNavigation("add")}
                        className="rounded-md bg-[#52677D] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#405469] hover:shadow-md"
                    >
                        + Add Opportunity
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-10 w-10 items-center justify-center rounded-md text-[#52677D] transition-colors hover:bg-[#F3F5F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52677D] md:hidden"
                >
                    {menuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-[#E8EBEF] bg-white px-6 py-6 shadow-md md:hidden"
                >
                    <div className="flex flex-col gap-5">
                        {navigationLinks.map((link) => (
                            <button
                                key={link.section}
                                type="button"
                                onClick={() =>
                                    handleNavigation(link.section)
                                }
                                className="text-left text-sm font-medium text-[#788797] transition-colors duration-200 hover:text-[#52677D]"
                            >
                                {link.label}
                            </button>
                        ))}

                        <button
                            type="button"
                            onClick={() => handleNavigation("add")}
                            className="mt-2 w-full rounded-md bg-[#52677D] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#405469]"
                        >
                            + Add Opportunity
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
