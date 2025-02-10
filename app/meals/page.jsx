import { Suspense } from "react"
import MealsGrid from "@/components/meals/MealsGrid"
import { getMeals } from "@/lib/Meals.js"
import Link from "next/link"

// data fetching using a component fnc
const Meals = async () => {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    return (
        <>
            <header className="w-[90%] max-w-[75rem] gap-10 mx-10 my-20 text-[#ddd6cb] text-[1.5rem]">
                <h1 className="font-sans-montserrat">Delicious meals, created
                    <span style={{
                        background: 'linear-gradient(90deg, #f9572a, #ff8a05)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>by me
                    </span>
                </h1>
                <h3 className="m-1">Choose your fav recipe</h3>
                {/* cta */}
                <span>
                    <Link heref='/meals/share' className="inline-block bg-gradient-to-r from-[#f9572a] to-[#ff9b05] mt-4 px-2 py-4 rounded-sm text-white font-bold">Share Your Favourite Recipe</Link>
                </span>

                <main className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-3xl font-bold text-gray-900">Welcome to our eatery</h2>
                    <Suspense fallback={<span className="text-center" style={{animation: "loading 1.2s ease-in-out infinite"}}>Loading meals...</span>}>
                        <Meals />
                    </Suspense>

                </main>
            </header >
        </>

    )
}