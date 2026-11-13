
import { useState } from "react"

function AddOpportunity({ onAddOpportunity }) {
    const initialFormData = {
        title: "",
        category: "",
        city: "",
        date: "",
        capacity: "",
        price: "",
    }

    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }))

        setError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            !formData.title.trim() ||
            !formData.category ||
            !formData.city.trim() ||
            !formData.date ||
            formData.capacity === "" ||
            formData.price === ""
        ) {
            setError("Please complete all fields.")
            return
        }

        if (Number.isNaN(Date.parse(formData.date))) {
            setError("Please enter a valid date.")
            return
        }

        const capacity = Number(formData.capacity)
        const price = Number(formData.price)

        if (!Number.isInteger(capacity) || capacity < 0) {
            setError("Capacity must be a whole number of zero or more.")
            return
        }

        if (!Number.isFinite(price) || price < 0) {
            setError("Price must be zero or more.")
            return
        }

        const newOpportunity = {
            id: Date.now(),
            title: formData.title.trim(),
            category: formData.category,
            city: formData.city.trim(),
            date: formData.date,
            description: `Discover this new ${formData.category.toLowerCase()} opportunity in ${formData.city.trim()}.`,
            capacity,
            availableSeats: capacity,
            price,
            featured: false,
        }

        onAddOpportunity(newOpportunity)

        setFormData(initialFormData)
        setError("")
    }

    const handleClear = () => {
        setFormData(initialFormData)
        setError("")
    }

    return (
        <section
            id="add"
            className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
        >
            <div className="mx-auto max-w-4xl">

                {/* Heading */}
                <div className="mb-10 text-center">
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#BBA47E] sm:text-sm">
                        SHARE AN OPPORTUNITY
                    </p>

                    <h2 className="text-3xl font-bold text-[#34495E] sm:text-4xl">
                        Add New Opportunity
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#788797] sm:text-base">
                        Help others discover valuable opportunities by sharing
                        workshops, courses, career events, and community activities.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="rounded-xl border border-[#E8EBEF] bg-[#F9FAFB] p-5 shadow-sm sm:p-8"
                >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                        {/* Title */}
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="mb-2 block text-sm font-semibold text-[#52677D]">
                                Opportunity Title
                            </label>

                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter opportunity title"
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm outline-none focus:border-[#52677D]"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="mb-2 block text-sm font-semibold text-[#52677D]">
                                Category
                            </label>

                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm outline-none focus:border-[#52677D]"
                            >
                                <option value="">Select category</option>
                                <option value="Workshop">Workshop</option>
                                <option value="Course">Course</option>
                                <option value="Career">Career</option>
                                <option value="Community">Community</option>
                            </select>
                        </div>

                        {/* City */}
                        <div>
                            <label htmlFor="city" className="mb-2 block text-sm font-semibold text-[#52677D]">
                                City
                            </label>

                            <input
                                id="city"
                                name="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="e.g. Kigali"
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm outline-none focus:border-[#52677D]"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label htmlFor="date" className="mb-2 block text-sm font-semibold text-[#52677D]">
                                Opportunity Date
                            </label>

                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm outline-none focus:border-[#52677D]"
                            />
                        </div>

                        {/* Capacity */}
                        <div>
                            <label htmlFor="capacity" className="mb-2 block text-sm font-semibold text-[#52677D]">
                                Total Capacity
                            </label>

                            <input
                                id="capacity"
                                name="capacity"
                                type="number"
                                min="0"
                                step="1"
                                value={formData.capacity}
                                onChange={handleChange}
                                placeholder="e.g. 30"
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm outline-none focus:border-[#52677D]"
                            />
                        </div>

                        {/* Price */}
                        <div className="sm:col-span-2">
                            <label htmlFor="price" className="mb-2 block text-sm font-semibold text-[#52677D]">
                                Price (RWF)
                            </label>

                            <input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                step="any"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter 0 for free opportunities"
                                className="w-full rounded-md border border-[#D5DDE5] bg-white px-4 py-3 text-sm outline-none focus:border-[#52677D]"
                            />
                        </div>
                    </div>

                    {/* Error message */}
                    {error && (
                        <p
                            role="alert"
                            className="mt-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                            {error}
                        </p>
                    )}

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={handleClear}
                            className="rounded-md border border-[#D5DDE5] bg-white px-6 py-3 text-sm font-semibold text-[#52677D] transition hover:bg-[#F3F5F7]"
                        >
                            Clear Form
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-[#52677D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#405469]"
                        >
                            Add Opportunity
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddOpportunity
