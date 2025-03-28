import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
    return (
        <ul className="grid grid-cols-3 sm:grid sm:grid-cols-2 gap-14 w-[90%] mx-10 p-10 my-auto max-w-[90rem] shadow-md">
            {meals.map((meal) => (
                <li key={meal.id}>
                    {/* spread operator */}
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}