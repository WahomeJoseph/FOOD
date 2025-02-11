import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
    return (
        <ul className="grid grid-cols-2 gap-16 w-[90%] mx-10 p-10 my-auto max-w-[90rem] shadow-md">
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}