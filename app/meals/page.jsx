import { Suspense } from "react"
import MealsGrid from "@/components/meals/MealsGrid"
import { getMeals } from "@/lib/Meals.js"
import Link from "next/link"
export const metadata = {
    title: 'Cuisine For Foodies',
    description: 'Delicious meals, shared by a food-loving community.',
  };

// data fetching using a component fnc
const Meals = async () => {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    return (
        <>
            <header className="w-[90%] max-w-[75rem] gap-10 mx-10 my-14 text-[#ddd6cb] text-[1.5rem]">
                <h1 className="font-sans-montserrat">Delicious delicacies, compiled
                    <span style={{
                        background: 'linear-gradient(90deg, #f9572a, #ff8a05)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}> by JW Recipes
                    </span>
                </h1>
                <h3 className="m-1">Find Your Favourite Recipe</h3>
                {/* cta */}
                <span>
                    <Link href='/meals/share' className="inline-block bg-gradient-to-r from-[#f9572a] to-[#ff9b05] mt-4 px-2 py-3 rounded-sm text-white font-bold">Share Your Favourite Recipe</Link>
                </span>
            </header >
            <main className="flex flex-col items-center justify-center min-h-screen">
                <Suspense fallback={<span className="font-sans-montserrat mb-20 text-[2rem] text-[#dddfcb] animate-loading">Loading meals...</span>}>
                    <Meals />
                </Suspense>
            </main>

        </>

    )
}