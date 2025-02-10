import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
    return (
        <ul className="grid grid-cols-2 gap-8 w-[90%] mx-8 my-auto max-w-[90rem] list-style-none">
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}