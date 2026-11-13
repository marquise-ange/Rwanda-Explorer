
function Hero({ onNavigate }) {
    return (
        <section
            id="home"
            className="overflow-hidden bg-[#F3F5F7]"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-3 px-3 py-12 sm:gap-6 sm:px-6 sm:py-16 lg:gap-16 lg:px-10 lg:py-24">

                {/* Left Content */}
                <div className="w-full min-w-0 max-w-xl">

                    <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#DCE2E8] bg-white px-2 py-2 text-[8px] font-semibold tracking-wide text-[#71869A] min-[400px]:text-[9px] sm:mb-5 sm:gap-2 sm:px-4 sm:text-xs">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#BBA47E] sm:h-2 sm:w-2"></span>
                        DISCOVER YOUR NEXT OPPORTUNITY
                    </p>

                    <h1 className="text-[clamp(1.25rem,4.5vw,3.75rem)] font-bold leading-tight tracking-tight text-[#34495E]">
                        Your Future
                        <br />
                        Begins <span className="text-[#71869A]">Here.</span>
                    </h1>

                    <p className="mt-3 text-[10px] leading-relaxed text-[#788797] min-[400px]:text-xs sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
                        Discover opportunities, develop your skills, and connect
                        with experiences that help you grow. Your next step
                        starts with IMBERE.
                    </p>

                    {/* Buttons */}
                    <div className="mt-4 flex w-full flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3 lg:mt-9 lg:gap-4">

                        <button
                            type="button"
                            onClick={() => onNavigate("opportunities")}
                            className="w-full rounded-md bg-[#52677D] px-2 py-2.5 text-[9px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#405469] hover:shadow-md min-[400px]:text-[10px] sm:w-auto sm:px-4 sm:py-3 sm:text-xs lg:px-7 lg:py-4 lg:text-sm"
                        >
                            Explore Opportunities
                            <span className="ml-1 sm:ml-2">→</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => onNavigate("about")}
                            className="w-full rounded-md border border-[#D5DDE5] bg-white px-2 py-2.5 text-[9px] font-semibold text-[#52677D] transition-colors hover:bg-[#EAEFF3] min-[400px]:text-[10px] sm:w-auto sm:px-4 sm:py-3 sm:text-xs lg:px-7 lg:py-4 lg:text-sm"
                        >
                            Learn More
                        </button>

                    </div>

                    {/* Supporting Text */}
                    <p className="mt-4 text-[9px] text-[#8995A1] min-[400px]:text-[10px] sm:mt-6 sm:text-xs lg:mt-8 lg:text-sm">
                        Discover. Connect. Grow.
                    </p>

                </div>

                {/* Right Image */}
                <div className="relative w-full min-w-0">

                    <div className="overflow-hidden rounded-lg shadow-xl sm:rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                            alt="Young professionals collaborating around a laptop"
                            className="aspect-3/4 w-full object-cover sm:aspect-4/3 lg:aspect-5/4 lg:h-125"
                        />
                    </div>

                    {/* Floating Information Card */}
                    <div className="mt-2 w-full rounded-lg border border-[#E8EBEF] bg-white p-2 shadow-lg sm:mt-3 sm:rounded-xl sm:p-4 md:absolute md:-bottom-5 md:-left-3.75 md:mt-0 md:w-max md:max-w-[95%] lg:-bottom-6 lg:-left-6 lg:p-6">

                        <p className="text-[8px] font-medium tracking-wide text-[#8995A1] sm:text-xs">
                            YOUR NEXT STEP
                        </p>

                        <p className="mt-1 text-[10px] font-bold text-[#52677D] min-[400px]:text-xs sm:text-base lg:text-lg">
                            Start Growing Today
                        </p>

                        <p className="mt-1 text-[8px] text-[#8995A1] min-[400px]:text-[9px] sm:text-xs lg:text-sm">
                            Find opportunities that matter.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
