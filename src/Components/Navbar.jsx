
import { useState } from "react"

function Navbar({ onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavigation = (section) => {
        onNavigate(section)
        setMenuOpen(false)
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#E8EBEF] bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                {/* Logo */}
                <button
                    type="button"
                    onClick={() => handleNavigation("home")}
                    className="shrink-0"
                >
                    <span className="text-2xl font-bold tracking-[0.08em] text-[#52677D]">
                        IMBERE<span className="text-[#BBA47E]">.</span>
                    </span>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <button
                        type="button"
                        onClick={() => handleNavigation("home")}
                        className="border-b-2 border-[#52677D] pb-1 text-sm font-semibold text-[#52677D]"
                    >
                        Home
                    </button>

                    <button
                        type="button"
                        onClick={() => handleNavigation("about")}
                        className="pb-1 text-sm font-medium text-[#788797] transition-colors hover:text-[#52677D]"
                    >
                        About Us
                    </button>

                    <button
                        type="button"
                        onClick={() => handleNavigation("opportunities")}
                        className="pb-1 text-sm font-medium text-[#788797] transition-colors hover:text-[#52677D]"
                    >
                        Opportunities
                    </button>

                    <button
                        type="button"
                        onClick={() => handleNavigation("saved")}
                        className="pb-1 text-sm font-medium text-[#788797] transition-colors hover:text-[#52677D]"
                    >
                        Saved
                    </button>

                    <button
                        type="button"
                        onClick={() => handleNavigation("add")}
                        className="rounded-md border border-[#52677D] px-5 py-2.5 text-sm font-semibold text-[#52677D] transition-all duration-200 hover:bg-[#52677D] hover:text-white"
                    >
                        + Add Opportunity
                    </button>

                </div>

                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-10 w-10 items-center justify-center rounded-md text-[#52677D] transition-colors hover:bg-[#F3F5F7] md:hidden"
                >
                    {menuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
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

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-[#E8EBEF] bg-white px-6 py-5 shadow-sm md:hidden"
                >
                    <div className="flex flex-col gap-5">

                        <button
                            type="button"
                            onClick={() => handleNavigation("home")}
                            className="text-left text-sm font-semibold text-[#52677D]"
                        >
                            Home
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavigation("about")}
                            className="text-left text-sm font-medium text-[#788797] hover:text-[#52677D]"
                        >
                            About Us
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavigation("opportunities")}
                            className="text-left text-sm font-medium text-[#788797] hover:text-[#52677D]"
                        >
                            Opportunities
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavigation("saved")}
                            className="text-left text-sm font-medium text-[#788797] hover:text-[#52677D]"
                        >
                            Saved
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavigation("add")}
                            className="w-full rounded-md bg-[#52677D] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#405469]"
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
