import { getMeal } from "@/lib/Meals";
import { notFound } from "next/navigation";

export function MealCard ({params}){
    const meals = getMeal(params.mealSlug)
    if (!meals) {
        notFound()
    }
    meals.instructions = meals.instructions.replace(/\n/g, '<br />' )

    return(
        <>
        <header>
            <div>
                <Image src={meals.image} fill/>
            </div>
            <div>
                <h2>{meals.title}Meal Title</h2>
                <p>By <a href={`mailto:${meals.creator_email}`}>{meals.creator}</a></p>
                <p>{meals.summary}SUMMARY</p>
            </div>
        </header>
        <main className="p-4">
            <h2 className="text-2xl font-bold">Meal Card</h2>
            <p dangerouslySetInnerHTML={{__html: meals.instructions}}>COOKING INSTRUCTIONS</p>
        </main>
        </>
        
    )
}