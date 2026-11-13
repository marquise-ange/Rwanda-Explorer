
function About({ onNavigate }) {
    const values = [
        {
            number: "01",
            title: "Discover",
            description:
                "Explore opportunities that match your interests, goals, and ambitions.",
        },
        {
            number: "02",
            title: "Develop",
            description:
                "Build your skills, gain experience, and prepare yourself for new challenges.",
        },
        {
            number: "03",
            title: "Connect",
            description:
                "Connect with learning experiences, communities, and opportunities that move you forward.",
        },
    ]

    return (
        <section
            id="about"
            className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#BBA47E] sm:text-sm">
                        ABOUT IMBERE
                    </p>

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#34495E] sm:text-4xl lg:text-5xl">
                        Creating Paths to
                        <span className="text-[#71869A]"> New Possibilities.</span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#788797] sm:text-base sm:leading-8">
                        IMBERE is a platform designed to help people discover
                        opportunities, develop their potential, and take
                        meaningful steps toward their future.
                    </p>

                </div>

                {/* Values */}
                <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-8">

                    {values.map((value) => (
                        <div
                            key={value.number}
                            className="rounded-xl border border-[#E8EBEF] bg-[#F9FAFB] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                        >
                            <span className="text-sm font-semibold tracking-widest text-[#BBA47E]">
                                {value.number}
                            </span>

                            <h3 className="mt-5 text-xl font-bold text-[#52677D] sm:text-2xl">
                                {value.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#788797]">
                                {value.description}
                            </p>

                            <div className="mt-6 h-1 w-12 rounded-full bg-[#BBA47E]"></div>
                        </div>
                    ))}

                </div>

                {/* Bottom Call to Action */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-xl bg-[#F3F5F7] p-6 sm:mt-16 sm:flex-row sm:p-8 lg:p-10">

                    <div>
                        <h3 className="text-xl font-bold text-[#34495E] sm:text-2xl">
                            Your next opportunity starts here.
                        </h3>

                        <p className="mt-2 text-sm text-[#788797]">
                            Take the next step and explore what's possible.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => onNavigate("opportunities")}
                        className="w-full rounded-md bg-[#52677D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#405469] sm:w-auto"
                    >
                        Explore Opportunities →
                    </button>

                </div>

            </div>
        </section>
    )
}

export default About
